import { connect } from 'react-redux'
import { useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import {
  requestingThreads,
  requestedThreadsSuccess,
  requestedThreadsError
} from '../store/actions'
import Clock from './clock'
import { textile } from '../textile'

const ThreadList = ({
  requestingThreads,
  requestedThreadsSuccess,
  requestedThreadsError,
  profile
}) => {
  useEffect(() => {
    const loadThreads = async () => {
      requestingThreads(profile.id)
      try {
        const threads = await textile.threads.list()
        requestedThreadsSuccess(threads)
      } catch (error) {
        requestedThreadsError(error)
      }
    }

    loadThreads()
  }, [])

  return (
    <Row className="custom-container">
      <Col lg={12}>
        <Card>
          <Card.Body>list here</Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

const mapStateToProps = ({ threads, profile }) => ({
  threads,
  profile
})

export default connect(
  mapStateToProps,
  {
    requestingThreads,
    requestedThreadsSuccess,
    requestedThreadsError
  }
)(ThreadList)