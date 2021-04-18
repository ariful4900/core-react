import React, { Component } from 'react';
import { Button, Input, Modal, ModalBody, ModalHeader } from 'reactstrap';

import PollList from './PollList';
import PollForm from '../PollForm/index';

class Sidebar extends Component {

    state = {
        openModal: false
    }

    toggleModal = () => {
        this.setState({
            openModal: !this.state.openModal
        })
    }
    render() {
        return (
            <div style={{ background: '#efefef', padding: '10px' }}>
                <div className="d-flex mb-5">
                    <Input
                        type="search"
                        placeholder="Search"
                        onChange={e => this.props.handleSearch(e.target.value)}
                        value={this.props.searchTerm}
                    />
                    <Button
                        color="success"
                        className="ml-auto"
                        onClick={this.toggleModal}
                    >
                        new
                    </Button>

                </div>
                <h3>List of Polls</h3>
                <hr />
                <PollList
                    polls={this.props.polls}
                    selectPoll={this.props.selectPoll}
                />
                <Modal isOpen={this.state.openModal} toggle={this.toggleModal} unmountOnClose={true}>
                    <ModalHeader toggle={this.toggleModal}>
                        Create A New Poll
                    </ModalHeader>
                    <ModalBody>
                        <PollForm
                            submit={this.props.addNewPoll}
                        />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Sidebar;
