import _ from 'lodash'

import initialState, {
  requestedProfile,
  requestedProfileSuccess,
  requestedProfileError,
  requestedNewStream,
  requestedNewStreamSuccess,
  requestedNewStreamError,
  requestedStream,
  requestedStreamSuccess,
  requestedStreamError,
  requestedStreams,
  requestedStreamsSuccess,
  requestedStreamsError,
  requestedMessage,
  requestedMessageSuccess,
  requestedMessageError,
  changedInput,
  changedMessageInput,
  changedStreamInput,
} from './states'
import {
  REQUESTED_PROFILE,
  REQUESTED_PROFILE_SUCCESS,
  REQUESTED_PROFILE_ERROR,
  REQUESTED_STREAM,
  REQUESTED_STREAM_SUCCESS,
  REQUESTED_STREAM_ERROR,
  REQUESTED_NEW_STREAM,
  REQUESTED_NEW_STREAM_SUCCESS,
  REQUESTED_NEW_STREAM_ERROR,
  REQUESTED_STREAMS,
  REQUESTED_STREAMS_SUCCESS,
  REQUESTED_STREAMS_ERROR,
  REQUESTED_MESSAGE,
  REQUESTED_MESSAGE_SUCCESS,
  REQUESTED_MESSAGE_ERROR,
  CHANGED_INPUT,
  CHANGED_MESSAGE_INPUT,
  CHANGED_STREAM_INPUT,
} from './actionTypes'

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_PROFILE: {
      return requestedProfile(_.cloneDeep(state))
    }
    case REQUESTED_PROFILE_SUCCESS: {
      return requestedProfileSuccess(_.cloneDeep(state), action.payload.profile)
    }
    case REQUESTED_PROFILE_ERROR: {
      return requestedProfileError(_.cloneDeep(state), action.error)
    }
    case REQUESTED_NEW_STREAM: {
      return requestedNewStream(_.cloneDeep(state), action.meta.address)
    }
    case REQUESTED_NEW_STREAM_SUCCESS: {
      return requestedNewStreamSuccess(
        _.cloneDeep(state),
        action.meta.address,
        action.payload.streamId
      )
    }
    case REQUESTED_NEW_STREAM_ERROR: {
      return requestedNewStreamError(
        _.cloneDeep(state),
        action.meta.address,
        action.error
      )
    }
    case REQUESTED_STREAM: {
      return requestedStream(_.cloneDeep(state))
    }
    case REQUESTED_STREAM_SUCCESS: {
      return requestedStreamSuccess(_.cloneDeep(state), action.payload.stream)
    }
    case REQUESTED_STREAM_ERROR: {
      return requestedStreamError(_.cloneDeep(state), action.error)
    }
    case REQUESTED_STREAMS: {
      return requestedStreams(_.cloneDeep(state))
    }
    case REQUESTED_STREAMS_SUCCESS: {
      return requestedStreamsSuccess(_.cloneDeep(state), action.payload.streams)
    }
    case REQUESTED_STREAMS_ERROR: {
      return requestedStreamsError(_.cloneDeep(state), action.error)
    }
    case REQUESTED_MESSAGE: {
      return requestedMessage(_.cloneDeep(state))
    }
    case REQUESTED_MESSAGE_SUCCESS: {
      return requestedMessageSuccess(_.cloneDeep(state), action.payload.message)
    }
    case REQUESTED_MESSAGE_ERROR: {
      return requestedMessageError(_.cloneDeep(state), action.error)
    }
    case CHANGED_INPUT: {
      return changedInput(_.cloneDeep(state), action.name, action.value)
    }
    case CHANGED_MESSAGE_INPUT: {
      return changedMessageInput(
        _.cloneDeep(state),
        action.streamId,
        action.value
      )
    }
    case CHANGED_STREAM_INPUT: {
      return changedStreamInput(_.cloneDeep(state), action.name, action.value)
    }
    default:
      return _.cloneDeep(state)
  }
}

export default reducer
