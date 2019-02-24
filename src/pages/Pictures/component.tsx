import Typography from '@material-ui/core/Typography';
import { S3Image } from 'aws-amplify-react';
import * as React from 'react';

import {
  ContentContainer,
  ReduxHasMessage,
  ReduxIsLoading,
  ReduxIsLoadingOff,
  ReduxIsLoadingOn,
} from '../../layout';
import { getFileNameFromS3ObjectKey } from '../../utils/s3';

import { IPictures } from './model';
import { IPicturesState } from './state';

interface IPicturesStateWithWrappedProps extends IPicturesState {
  listPictures(params: any): void;
}

class PicturesComponent extends React.PureComponent<IPicturesStateWithWrappedProps> {
  public componentDidMount = () => {
    this.props.listPictures({});
  }

  public render() {
    const {
      hasError,
      isLoading,
      pictures,
    } = this.props;

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
          Pictures
        </Typography>
        <ReduxIsLoadingOn />
        {
          (!isLoading && !hasError) &&
          pictures.map((data: IPictures) => (
            <React.Fragment
              key={`${data.id}-fragment`}
            >
              <Typography
                gutterBottom={true}
                key={`${data.id}-typography`}
                variant="subtitle1"
              >
                {data.name}
              </Typography>
              <S3Image
                key={`${data.id}-s3image`}
                level={data.visibility}
                imgKey={getFileNameFromS3ObjectKey(data.file.key)}
                theme={{
                  photoImg: {
                    height: 'auto',
                    width: '100%',
                  }
                }}
              />
            </React.Fragment>
          ))
        }
        <ReduxIsLoadingOff />
      </ContentContainer>
    );
  }
}

export default (PicturesComponent as any);
