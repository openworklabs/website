import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  requestedNewStream,
  requestedNewStreamSuccess,
  requestedNewStreamError,
} from '../store/actions'
import '../styles/index.scss'
import { Input } from '../components/'

const StreamForm = ({ onSubmit, title, buttonText, forms }) => {
  return (
    <Row className="custom-container">
      <h2>{title}</h2>
      <Col lg={8} lgoffset={4}>
        <Input
          controlLabel="Name"
          onChange={onSubmit}
          name="name"
          val={forms.stream.name}
        />
      </Col>
      <Col lg={4}>
        <Button onClick={onSubmit}>{buttonText}</Button>
      </Col>
    </Row>
  )
}

StreamForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
}

StreamForm.defaultProps = {
  title: '',
  buttonText: 'Submit',
}

const mapStateToProps = ({ peers, profile, forms }) => ({
  peers,
  profile,
  forms,
})

export default connect(
  mapStateToProps,
  {
    requestedNewStream,
    requestedNewStreamSuccess,
    requestedNewStreamError,
  }
)(StreamForm)
