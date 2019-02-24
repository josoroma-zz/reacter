import Typography from '@material-ui/core/Typography';
import * as React from 'react';

import { INews } from './model';
import { INewsState } from './state';

import {
  ContentContainer,
  ReduxHasMessage,
  ReduxIsLoading,
} from '../../layout';
interface INewsStateWithWrappedProps extends INewsState {
  fetchNews(url: string): void;
}

class News extends React.PureComponent<INewsStateWithWrappedProps> {
  public componentDidMount = async(): Promise<void> => {
    await this.props.fetchNews('https://uinames.com/api/?amount=5');
  }

  public render() {
    const { hasError, isLoading, news } = this.props;

    return (
      <ContentContainer>
        {
          isLoading &&
          <ReduxIsLoading
            isLoading={isLoading}
          />
        }
        {
          hasError &&
          <ReduxHasMessage
            error={'PicturesComponent: ReduxHasMessage'}
          />
        }
        <Typography
          gutterBottom={true}
          variant="h1"
        >
          Generate Random Names
        </Typography>
        <ul>
          {news.map((data: INews) => (
            <li key={data.name}>
              {`${data.surname}, ${data.name} `}
            </li>
          ))}
        </ul>
      </ContentContainer>
    );
  }
}

export default News;
