
import { Asset } from 'expo-asset';

// We map all assets here so Metro bundles them properly
const chapterAssets: Record<string, any> = {
    ch1: {
        overview: require('@/assets/chapters/chapter1/overview.html'),
        exercises: require('@/assets/chapters/chapter1/exercises.html'),
        mcqs: require('@/assets/chapters/chapter1/mcqs.html')
    },
    ch2: {
        overview: require('@/assets/chapters/chapter2/overview.html'),
        exercises: require('@/assets/chapters/chapter2/exercises.html'),
        mcqs: require('@/assets/chapters/chapter2/mcqs.html')
    },
    ch3: {
        overview: require('@/assets/chapters/chapter3/overview.html'),
        exercises: require('@/assets/chapters/chapter3/exercises.html'),
        mcqs: require('@/assets/chapters/chapter3/mcqs.html')
    },
    ch4: {
        overview: require('@/assets/chapters/chapter4/overview.html'),
        exercises: require('@/assets/chapters/chapter4/exercises.html'),
        mcqs: require('@/assets/chapters/chapter4/mcqs.html')
    },
    ch5: {
        overview: require('@/assets/chapters/chapter5/overview.html'),
        exercises: require('@/assets/chapters/chapter5/exercises.html'),
        mcqs: require('@/assets/chapters/chapter5/mcqs.html')
    },
    ch6: {
        overview: require('@/assets/chapters/chapter6/overview.html'),
        exercises: require('@/assets/chapters/chapter6/exercises.html'),
        mcqs: require('@/assets/chapters/chapter6/mcqs.html')
    },
    ch7: {
        overview: require('@/assets/chapters/chapter7/overview.html'),
        exercises: require('@/assets/chapters/chapter7/exercises.html'),
        mcqs: require('@/assets/chapters/chapter7/mcqs.html')
    },
    ch8: {
        overview: require('@/assets/chapters/chapter8/overview.html'),
        exercises: require('@/assets/chapters/chapter8/exercises.html'),
        mcqs: require('@/assets/chapters/chapter8/mcqs.html')
    },
    ch9: {
        overview: require('@/assets/chapters/chapter9/overview.html'),
        exercises: require('@/assets/chapters/chapter9/exercises.html'),
        mcqs: require('@/assets/chapters/chapter9/mcqs.html')
    },
    ch10: {
        overview: require('@/assets/chapters/chapter10/overview.html'),
        exercises: require('@/assets/chapters/chapter10/exercises.html'),
        mcqs: require('@/assets/chapters/chapter10/mcqs.html')
    },
    ch11: {
        overview: require('@/assets/chapters/chapter11/overview.html'),
        exercises: require('@/assets/chapters/chapter11/exercises.html'),
        mcqs: require('@/assets/chapters/chapter11/mcqs.html')
    },
    ch12: {
        overview: require('@/assets/chapters/chapter12/overview.html'),
        exercises: require('@/assets/chapters/chapter12/exercises.html'),
        mcqs: require('@/assets/chapters/chapter12/mcqs.html')
    },
    ch13: {
        overview: require('@/assets/chapters/chapter13/overview.html'),
        exercises: require('@/assets/chapters/chapter13/exercises.html'),
        mcqs: require('@/assets/chapters/chapter13/mcqs.html')
    },
    ch14: {
        overview: require('@/assets/chapters/chapter14/overview.html'),
        exercises: require('@/assets/chapters/chapter14/exercises.html'),
        mcqs: require('@/assets/chapters/chapter14/mcqs.html')
    }
};

export const ContentService = {
    getSectionUri(chapterId: string, section: 'overview' | 'exercises' | 'mcq'): string | null {
        // We map 'mcq' to 'mcqs'
        const sectionKey = section === 'mcq' ? 'mcqs' : section;

        try {
            const assetModule = chapterAssets[chapterId]?.[sectionKey];
            if (assetModule) {
                return Asset.fromModule(assetModule).uri;
            }
        } catch (e) {
            console.warn(`Could not load asset mapping for ${chapterId} - ${section}`);
        }
        return null;
    }
};
