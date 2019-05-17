import React, { Component } from 'react'
import CustomButton from '../components/CustomButton'
import MyModal from '../components/MyModal'

class BodyContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modalOpen: false,
            title: '',
            bodyText: '',
            backgroundColor: ''
        }
    }

    handleButton(color){
        switch(color){
            case 'red':
                return this.setState({ modalOpen: true, title: 'Red', bodyText: 'Red button is triggered', backgroundColor: 'linear-gradient(red, orange)'})
            case 'blue':
                return this.setState({ modalOpen: true, title: 'Blue', bodyText: 'Blue button is triggered', backgroundColor: 'linear-gradient(blue, cyan)'})
        }
    }

    handleClose(){
        this.setState({ modalOpen: false })
    }


    render(){
        return(
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <h1>Hello Task 1</h1>
                <div style={{display: 'flex'}}>
                    <CustomButton buttonName = {'Red'} buttonVariant={'danger'} onClick={() => this.handleButton('red')}/>
                    <CustomButton buttonName = {'Blue'} buttonVariant={'primary'} onClick={() => this.handleButton('blue')}/>
                </div> 
                <MyModal 
                    showProps={this.state.modalOpen} 
                    modalTitle={this.state.title} 
                    modalBodyText={this.state.bodyText}
                    onHideProps={this.handleClose.bind(this)}
                    backgroundColor = {this.state.backgroundColor}
                    onClose={this.handleClose.bind(this)}/>
            </div>
        )
    }

}

export default BodyContainer