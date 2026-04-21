import React, { memo, useState, useCallback } from "react";
import { StyleSheet, View, ScrollView, Pressable, RefreshControl, Alert } from "react-native";
import { useNavigation, useFocusEffect, useRoute, RouteProp } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";
import { JiguuColors, Spacing, Typography, BorderRadius } from "@/constants/theme";
import { RootStackParamList } from "@/navigation/RootStackNavigator";
import { getNotes, deleteNote, Note } from "@/utils/storage";

type QuickNotesNavigationProp = NativeStackNavigationProp<RootStackParamList, "QuickNotes">;

const NOTE_GRADIENTS = [
  ["#FF6B6B20", "#FF6B6B"], // Red
  ["#4ECDC420", "#4ECDC4"], // Teal
  ["#FFE66D20", "#FFE66D"], // Yellow
  ["#1A535C20", "#1A535C"], // Dark Teal
  ["#FF9F1C20", "#FF9F1C"], // Orange
];

function QuickNotesScreen() {
  const navigation = useNavigation<QuickNotesNavigationProp>();
  const route = useRoute<RouteProp<RootStackParamList, "QuickNotes">>();
  const className = route.params?.className;
  const [notes, setNotes] = useState<Note[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadNotes = useCallback(async () => {
    const data = await getNotes();
    setNotes(data);
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadNotes();
    }, [loadNotes])
  );

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadNotes();
    setRefreshing(false);
  }, [loadNotes]);

  const handleDelete = useCallback((id: string) => {
    Alert.alert(
      "Delete Note",
      "Are you sure you want to delete this note?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            await deleteNote(id);
            loadNotes();
          }
        }
      ]
    );
  }, [loadNotes]);

  return (
    <ScreenWrapper showBackButton hideHomeButton>
      <View style={styles.container}>
        <View style={styles.header}>
          <ThemedText style={[styles.title, { color: JiguuColors.accent1 }]}>
            Quick Notes
          </ThemedText>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={JiguuColors.textSecondary} />
          }
        >
          {notes.length === 0 ? (
            <EmptyState
              title="No Notes Yet"
              message="Tap the + button to create your first note."
              icon="edit-3"
            />
          ) : (
            <View style={styles.notesGrid}>
              {notes.map((note) => (
                <Pressable
                  key={note.id}
                  delayPressIn={0}
                  style={[
                    styles.noteCard,
                    {
                      backgroundColor: JiguuColors.surface,
                      borderColor: NOTE_GRADIENTS[note.gradientIndex % NOTE_GRADIENTS.length][1]
                    }
                  ]}
                  onPress={() => navigation.navigate("NoteEditor", { note, className })}
                  onLongPress={() => handleDelete(note.id)}
                >
                  <View style={[
                    styles.accentStrip,
                    { backgroundColor: NOTE_GRADIENTS[note.gradientIndex % NOTE_GRADIENTS.length][1] }
                  ]} />
                  <ThemedText style={styles.noteTitle} numberOfLines={2}>
                    {note.title}
                  </ThemedText>
                  <ThemedText style={styles.notePreview} numberOfLines={3}>
                    {note.content}
                  </ThemedText>
                  <ThemedText style={styles.noteDate}>
                    {new Date(note.updatedAt).toLocaleDateString()}
                  </ThemedText>
                </Pressable>
              ))}
            </View>
          )}
        </ScrollView>

        <Pressable
          delayPressIn={0}
          style={styles.fab}
          onPress={() => navigation.navigate("NoteEditor", { className })}
        >
          <Feather name="plus" size={24} color="#FFF" />
        </Pressable>
      </View>
    </ScreenWrapper>
  );
}

export default memo(QuickNotesScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.lg,
    paddingBottom: 80,
    flexGrow: 1,
  },
  header: {
    paddingHorizontal: Spacing.xl,
    marginBottom: Spacing.lg,
    alignItems: "center",
  },
  title: {
    ...Typography.h2,
    fontFamily: "NotoSans_400Regular",
    letterSpacing: 0.5,
  },
  notesGrid: {
    gap: Spacing.md,
  },
  noteCard: {
    borderRadius: BorderRadius.md,
    padding: Spacing.sm,
    // minHeight removed for strip view
    borderWidth: 2,
    position: "relative",
    overflow: "hidden",
    flexDirection: 'column',
    justifyContent: 'center',
  },
  accentStrip: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 6,
  },
  noteTitle: {
    ...Typography.h4,
    color: JiguuColors.textPrimary,
    marginBottom: 2,
    paddingLeft: Spacing.sm,
    fontFamily: "NotoSans_400Regular",
  },
  notePreview: {
    ...Typography.small,
    color: JiguuColors.textSecondary,
    marginBottom: Spacing.xs,
    paddingLeft: Spacing.sm,
    fontFamily: "NotoSans_400Regular",
    // flex: 1, // removed to allow compact height
  },
  noteDate: {
    ...Typography.caption,
    color: JiguuColors.textSecondary,
    alignSelf: "flex-end",
    opacity: 0.7,
    marginRight: Spacing.xs,
    fontFamily: "NotoSans_400Regular",
  },
  fab: {
    position: "absolute",
    bottom: 40, 
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: JiguuColors.accent1,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    zIndex: 1000,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
