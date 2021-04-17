
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

import POLLS from '../Data/poll'
import { Component } from 'react';
import shortid from 'shortid';

class App extends Component {
  state = {
    polls: [],
    selectedPoll: {},
    searchTerm: ''
  }

  componentDidMount() {
    this.setState({ polls: POLLS })
  }

  addNewPoll = poll => {
    poll.id = shortid.generate()
    poll.created = new Date()
    poll.totalVote = 0
    poll.opinions = []

    this.setState({
      polls: this.state.polls.concat(poll)
    })
  }

  updatePoll = updatedPoll => {
    const polls = [...this.state.polls]
    const poll = polls.find(p => p.id === updatedPoll.id)

    poll.title = updatedPoll.title
    poll.description = updatedPoll.description
    poll.options = updatedPoll.opinions

    this.setState({ polls })
  }
  deletePoll = pollId => {
    let polls = [...this.seate.polls]
    polls.filter(p => p.id !== pollId)
    this.setState({ polls, selectedPoll: {} })

  }

  selectPoll = pollId => {
    const poll = this.state.polls.find(p => p.id === pollId)
    this.setState({ selectedPoll: poll })
  }
  handleSearch = searchTerm => {

  }
  render() {
    return (
      <Container className="my-5">
        <Row>
          <Col md={{ size: 4 }}>
            <Sidebar
              polls={this.state.polls}
              searchTerm={this.state.searchTerm}
              handleSearch={this.handleSearch}
              selectPoll={this.selectPoll}
              addNewPoll={this.addNewPoll}
            />
          </Col>
          <Col md={{ size: 8 }}>
            <MainContent polls={this.state.polls} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
