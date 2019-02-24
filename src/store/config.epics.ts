
import { combineEpics } from 'redux-observable';

import { newsEpics } from '../pages/News/state';
import { picturesEpics } from '../pages/Pictures/state';
import { uploadEpics } from '../pages/Pictures/Upload/state';

// RootEpics.
const rootEpics = [
  ...(Object as any).values({
    ...newsEpics,
    ...picturesEpics,
    ...uploadEpics,
  }),
];

const epics = combineEpics(...rootEpics);

export default epics;
