import { Asset } from 'expo-asset';

const chapterAssets: Record<string, any> = {
    ch1: {
        examples: require('@/assets/chapters/chapter1/examples.html'),
        exercise1: require('@/assets/chapters/chapter1/exercise1.html'),
        exercise2: require('@/assets/chapters/chapter1/exercise2.html'),
        exercises: require('@/assets/chapters/chapter1/exercises.html'),
        mcqs: require('@/assets/chapters/chapter1/mcqs.html'),
        overview: require('@/assets/chapters/chapter1/overview.html')
    },
    ch2: {
        examples: require('@/assets/chapters/chapter2/examples.html'),
        exercise1: require('@/assets/chapters/chapter2/exercise1.html'),
        exercise2: require('@/assets/chapters/chapter2/exercise2.html'),
        exercises: require('@/assets/chapters/chapter2/exercises.html'),
        mcqs: require('@/assets/chapters/chapter2/mcqs.html'),
        overview: require('@/assets/chapters/chapter2/overview.html')
    },
    ch3: {
        examples: require('@/assets/chapters/chapter3/examples.html'),
        exercise1: require('@/assets/chapters/chapter3/exercise1.html'),
        exercise2: require('@/assets/chapters/chapter3/exercise2.html'),
        exercise3: require('@/assets/chapters/chapter3/exercise3.html'),
        exercises: require('@/assets/chapters/chapter3/exercises.html'),
        mcqs: require('@/assets/chapters/chapter3/mcqs.html'),
        overview: require('@/assets/chapters/chapter3/overview.html')
    },
    ch4: {
        examples: require('@/assets/chapters/chapter4/examples.html'),
        exercise1: require('@/assets/chapters/chapter4/exercise1.html'),
        exercise2: require('@/assets/chapters/chapter4/exercise2.html'),
        exercise3: require('@/assets/chapters/chapter4/exercise3.html'),
        exercises: require('@/assets/chapters/chapter4/exercises.html'),
        mcqs: require('@/assets/chapters/chapter4/mcqs.html'),
        overview: require('@/assets/chapters/chapter4/overview.html')
    },
    ch5: {
        examples: require('@/assets/chapters/chapter5/examples.html'),
        exercise1: require('@/assets/chapters/chapter5/exercise1.html'),
        exercise2: require('@/assets/chapters/chapter5/exercise2.html'),
        exercise3: require('@/assets/chapters/chapter5/exercise3.html'),
        exercises: require('@/assets/chapters/chapter5/exercises.html'),
        mcqs: require('@/assets/chapters/chapter5/mcqs.html'),
        overview: require('@/assets/chapters/chapter5/overview.html')
    },
    ch6: {
        examples: require('@/assets/chapters/chapter6/examples.html'),
        exercise1: require('@/assets/chapters/chapter6/exercise1.html'),
        exercise2: require('@/assets/chapters/chapter6/exercise2.html'),
        exercise3: require('@/assets/chapters/chapter6/exercise3.html'),
        exercises: require('@/assets/chapters/chapter6/exercises.html'),
        mcqs: require('@/assets/chapters/chapter6/mcqs.html'),
        overview: require('@/assets/chapters/chapter6/overview.html'),
        theorems: require('@/assets/chapters/chapter6/theorems.html')
    },
    ch7: {
        examples: require('@/assets/chapters/chapter7/examples.html'),
        exercise1: require('@/assets/chapters/chapter7/exercise1.html'),
        exercise2: require('@/assets/chapters/chapter7/exercise2.html'),
        exercises: require('@/assets/chapters/chapter7/exercises.html'),
        mcqs: require('@/assets/chapters/chapter7/mcqs.html'),
        overview: require('@/assets/chapters/chapter7/overview.html')
    },
    ch8: {
        examples: require('@/assets/chapters/chapter8/examples.html'),
        exercise1: require('@/assets/chapters/chapter8/exercise1.html'),
        exercise2: require('@/assets/chapters/chapter8/exercise2.html'),
        exercise3: require('@/assets/chapters/chapter8/exercise3.html'),
        exercises: require('@/assets/chapters/chapter8/exercises.html'),
        mcqs: require('@/assets/chapters/chapter8/mcqs.html'),
        overview: require('@/assets/chapters/chapter8/overview.html')
    },
    ch9: {
        examples: require('@/assets/chapters/chapter9/examples.html'),
        exercise1: require('@/assets/chapters/chapter9/exercise1.html'),
        exercises: require('@/assets/chapters/chapter9/exercises.html'),
        mcqs: require('@/assets/chapters/chapter9/mcqs.html'),
        overview: require('@/assets/chapters/chapter9/overview.html')
    },
    ch10: {
        examples: require('@/assets/chapters/chapter10/examples.html'),
        exercise1: require('@/assets/chapters/chapter10/exercise1.html'),
        exercise2: require('@/assets/chapters/chapter10/exercise2.html'),
        exercises: require('@/assets/chapters/chapter10/exercises.html'),
        mcqs: require('@/assets/chapters/chapter10/mcqs.html'),
        overview: require('@/assets/chapters/chapter10/overview.html'),
        theorems: require('@/assets/chapters/chapter10/theorems.html')
    },
    ch11: {
        examples: require('@/assets/chapters/chapter11/examples.html'),
        exercise1: require('@/assets/chapters/chapter11/exercise1.html'),
        exercises: require('@/assets/chapters/chapter11/exercises.html'),
        mcqs: require('@/assets/chapters/chapter11/mcqs.html'),
        overview: require('@/assets/chapters/chapter11/overview.html')
    },
    ch12: {
        examples: require('@/assets/chapters/chapter12/examples.html'),
        exercise1: require('@/assets/chapters/chapter12/exercise1.html'),
        exercise2: require('@/assets/chapters/chapter12/exercise2.html'),
        exercises: require('@/assets/chapters/chapter12/exercises.html'),
        mcqs: require('@/assets/chapters/chapter12/mcqs.html'),
        overview: require('@/assets/chapters/chapter12/overview.html')
    },
    ch13: {
        examples: require('@/assets/chapters/chapter13/examples.html'),
        exercise1: require('@/assets/chapters/chapter13/exercise1.html'),
        exercise2: require('@/assets/chapters/chapter13/exercise2.html'),
        exercise3: require('@/assets/chapters/chapter13/exercise3.html'),
        exercises: require('@/assets/chapters/chapter13/exercises.html'),
        mcqs: require('@/assets/chapters/chapter13/mcqs.html'),
        overview: require('@/assets/chapters/chapter13/overview.html')
    },
    ch14: {
        examples: require('@/assets/chapters/chapter14/examples.html'),
        exercise1: require('@/assets/chapters/chapter14/exercise1.html'),
        exercises: require('@/assets/chapters/chapter14/exercises.html'),
        mcqs: require('@/assets/chapters/chapter14/mcqs.html'),
        overview: require('@/assets/chapters/chapter14/overview.html')
    },
};

export const ContentService = {
    getSectionUri(chapterId: string, section: string): string | null {
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
    },
    
    getAvailableSections(chapterId: string): string[] {
        return Object.keys(chapterAssets[chapterId] || {});
    }
};
