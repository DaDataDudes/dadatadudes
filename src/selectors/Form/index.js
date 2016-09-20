import { createSelector } from 'reselect';
import { Map } from 'immutable';

const allSectionsByRouteSelector = (state) => {
  console.log('state', state);
  return state.form.get('allSections');
};

const answerOptionsSelector = (state) => {
  return state.form.get('answerOptions');
};

export const currentIndexSelector = (state) => {
  return state.form.get('currentIndex');
};

export const currentSectionSelector = createSelector(
  [allSectionsByRouteSelector, currentIndexSelector],
  (allSectionsTable, currentIndex) => {
    return allSectionsTable.getIn([currentIndex, 'section']);
  }
);

export const currentSectionTitleSelector = createSelector(
  [allSectionsByRouteSelector, currentIndexSelector],
  (allSectionsTable, currentIndex) => {
    return allSectionsTable.getIn([currentIndex, 'sectionTitle']);
  }
);

export const currentQuestionsSelector = createSelector(
  [currentSectionSelector, answerOptionsSelector],
  (currentSection, answerOptions) => {
    return currentSection.get('questions').map((question) => {
      if (!question.has('answers')) {
        return question;
      }
      return question.set('answers', answerOptions.get(question.get('answers')));
    });
  }
);
export const currentPrefaceTextSelector = createSelector(
  [currentSectionSelector],
  (currentSection) => {
    return currentSection.get('prefaceText');
  }
);

export const currentRouteSelector = (state) => {
  return state.form.get('currentRoute');
};


export const formInputsSelector = (state) => state.form.formInputs;