
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
    poll.options = updatedPoll.options

    this.setState({ polls })
  }
  deletePoll = pollId => {
    let polls = this.state.polls.filter(p => p.id !== pollId)
    this.setState({ polls, selectedPoll: {} })

  }

  selectPoll = pollId => {
    const poll = this.state.polls.find(p => p.id === pollId)
    this.setState({ selectedPoll: poll })
  }
  getOpinion = res => {
    const { polls } = this.state;
    const poll = polls.find(p => p.id === res.pollId)

    const option = poll.options.find(o => o.id === res.selectedOption);

    poll.totalVote++
    option.vote++
    const opinion ={
      id: shortid.generate(),
      name: res.name,
      selectedOption: res.selectedOption
    }

    poll.opinions.push(opinion)
    this.setState({polls})
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
            <MainContent
              poll={this.state.selectedPoll}
              getOpinion={this.getOpinion}
              updatePoll={this.updatePoll}
              deletePoll={this.deletePoll}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
