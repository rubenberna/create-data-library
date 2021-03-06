import React from 'react';
import { Text } from 'ink';
import Spinner from 'ink-spinner';

export const Loader = ({ loadingMsg }) => {
  return(
    <>
      { loadingMsg &&
      <Text>
        <Text color="green">
          <Spinner type="dots"  />
        </Text>
        {` ${loadingMsg}`}
      </Text>
      }
    </>
  )
}