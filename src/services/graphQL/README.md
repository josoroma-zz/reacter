# The service approach works like a charm with Components and Epics

```
import { listPictures as queryListPictures } from '../../graphql/queries';
import GraphQL from '../../services/graphQL';
...
class PicturesComponent extends React.Component<IPicturesStateWithWrappedProps> {
  public componentDidMount = () => {
    const graphQL = new GraphQL();

    graphQL.query(queryListPictures).subscribe(
      (response: IPictures[]) => {
        // Handle response.
      },
      (err: any) => {
        // Handle error.
      }
    );
  }
...
```
