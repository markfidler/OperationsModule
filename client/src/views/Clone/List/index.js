import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { clones } from '../../../GraphQL/Calls'
import TopBar from '../../BannerTopBar'
//import CloneDialog from './CloneDialog'
import ListClones from './ListClones'

// Material-ui
import { Typography, Paper } from '@material-ui/core'

class BrowseClones extends Component {

  constructor (props) {
    super(props)
    let user = localStorage.getItem('user')
    this.state = {
      user: JSON.parse(user)
    }
  }

  render () {
    let data = this.props.data

    if (data.loading) {
      return (
        <TopBar
          size='big'
          title='Your Bot Clones'
          text='Loading your Bot Clones...'
          backgroundUrl='https://superalgos.org/img/photos/ecosystem.jpg'
        />
      )
    } else if (data.operations_Clones && data.operations_Clones.length > 0) {
      return (
        <React.Fragment>
          <TopBar
            size='medium'
            title='Your Bot Clones'
            text='All your Bot Clones are here.'
            backgroundUrl='https://superalgos.org/img/photos/ecosystem.jpg'
          />

          <div className='container'>
            {
                data.operations_Clones.map((clone, i) => {
                  return (
                    <ListClones key={clone.id} currentClone={clone} />
                  )
                })
            }
          </div>
        </React.Fragment>
      )
    } else if (data.error) {
      return (
        <TopBar
          size='big'
          title='Your Bot Clones'
          text='Please login to gain access to your Bot Clones.'
          backgroundUrl='https://superalgos.org/img/photos/ecosystem.jpg'
        />
      )
    } else {
      return (
        <TopBar
          size='big'
          title='Your Bot Clones'
          text="You don't have any Bot Clone yet. Once you create one you will find it here."
          backgroundUrl='https://superalgos.org/img/photos/ecosystem.jpg'
          />
      )
    }
  }

  getBodyContent (data) {
    if (data.loading) {
      return (
        <TopBar
          size='big'
          title='Manage your Bot Clones'
          text='Loading Bot Clones...'
          backgroundUrl='https://superalgos.org/img/photos/ecosystem.jpg'
        />
      )
    } else if (data.operations_Clones && data.operations_Clones.length > 0) {
      return (
        <React.Fragment>
          <TopBar
            size='big'
            title='Manage your Bot Clones'
            text='Loading Bot Clones...'
            backgroundUrl='https://superalgos.org/img/photos/ecosystem.jpg'
        />

          <div className='container'>
            {
              data.operations_Clones.map((clone, i) => {
                return (
                  <ListClones key={clone.id} currentClone={clone} />
                )
              })
          }
          </div>
        </React.Fragment>
      )
    } else if (data.error) {
      return (
        <TopBar
          size='big'
          title='No Bot Clones to display'
          text='Please Login to access your Bot Clones.'
          backgroundUrl='https://superalgos.org/img/photos/ecosystem.jpg'
        />
      )
    } else {
      return (

        <TopBar
          size='big'
          title='No Bot Clones to display'
          text="You don't have any Bot Clone yet. After you create a new Clone, it will be listed here."
          backgroundUrl='https://superalgos.org/img/photos/ecosystem.jpg'
          />
      )
    }
  }

}

export default graphql(clones.OPERATIONS_LIST_CLONES)(BrowseClones)
