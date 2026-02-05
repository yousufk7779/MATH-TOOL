import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, TextInput, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { JiguuColors, Spacing, Typography, BorderRadius } from "@/constants/theme";
import { saveNote, Note } from "@/utils/storage";
import { RootStackParamList } from "@/navigation/RootStackNavigator";

type NoteEditorRouteProp = RouteProp<RootStackParamList, "NoteEditor">;

export default function NoteEditorScreen() {
    const navigation = useNavigation();
    const route = useRoute<NoteEditorRouteProp>();
    const existingNote = route.params?.note;

    const [title, setTitle] = useState(existingNote?.title || "");
    const [content, setContent] = useState(existingNote?.content || "");
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: existingNote ? "Edit Note" : "New Note",
        });
    }, [navigation, existingNote]);

    const handleSave = useCallback(async () => {
        if (!title.trim() && !content.trim()) return;

        setIsSaving(true);
        try {
            const note: Note = {
                id: existingNote?.id || Date.now().toString(),
                title: title.trim() || "Untitled Note",
                content: content.trim(),
                gradientIndex: existingNote?.gradientIndex ?? Math.floor(Math.random() * 5),
                updatedAt: Date.now(),
            };

            await saveNote(note);
            navigation.goBack();
        } catch (error) {
            console.error("Failed to save note:", error);
        } finally {
            setIsSaving(false);
        }
    }, [title, content, existingNote, navigation]);

    return (
        <ScreenWrapper>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <View style={styles.header}>
                    <Pressable onPress={() => navigation.goBack()} style={styles.iconButton}>
                        <Feather name="x" size={24} color={JiguuColors.textSecondary} />
                    </Pressable>
                    <ThemedText style={styles.headerTitle}>
                        {existingNote ? "Edit Note" : "New Note"}
                    </ThemedText>
                    <Pressable
                        onPress={handleSave}
                        disabled={isSaving || (!title.trim() && !content.trim())}
                        style={[styles.iconButton, (!title.trim() && !content.trim()) && styles.disabledButton]}
                    >
                        <Feather name="check" size={24} color={JiguuColors.accent1} />
                    </Pressable>
                </View>

                <TextInput
                    style={styles.titleInput}
                    placeholder="Title"
                    placeholderTextColor={JiguuColors.textSecondary}
                    value={title}
                    onChangeText={setTitle}
                    maxLength={50}
                />

                <TextInput
                    style={styles.contentInput}
                    placeholder="Start typing..."
                    placeholderTextColor={JiguuColors.textSecondary}
                    value={content}
                    onChangeText={setContent}
                    multiline
                    textAlignVertical="top"
                />
            </KeyboardAvoidingView>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: Spacing.xl,
        paddingTop: Spacing.md,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: Spacing.lg,
    },
    headerTitle: {
        ...Typography.h4,
        color: JiguuColors.textPrimary,
    },
    iconButton: {
        padding: Spacing.sm,
    },
    disabledButton: {
        opacity: 0.5,
    },
    titleInput: {
        ...Typography.h3,
        color: JiguuColors.textPrimary,
        marginBottom: Spacing.md,
        paddingVertical: Spacing.sm,
    },
    contentInput: {
        ...Typography.body,
        color: JiguuColors.textPrimary,
        flex: 1,
        lineHeight: 24,
        marginBottom: Spacing.xl,
    },
});
