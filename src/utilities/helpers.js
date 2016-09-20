import {
  ListView
} from 'react-native';

export const processQuestions = (questions) => {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  console.log('questions', questions);
  return ds.cloneWithRows(questions.toJS());
};
