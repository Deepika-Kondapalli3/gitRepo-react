import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    activeId: languageFiltersData[0].id,
    repos: [],
    isLoading: true,
    failureImg: '',
  }
  componentDidMount() {
    this.getRepositories()
  }
  getRepositories = async () => {
    const {activeId} = this.state
    const githubReposApiUrl = `https://apis.ccbp.in/popular-repos?language=${activeId}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(githubReposApiUrl)
    const data = await response.json()
    const updatedData = data.popular_repos.map(eachRepo => ({
      name: eachRepo.name,
      id: eachRepo.id,
      issuesCount: eachRepo.issues_count,
      forksCount: eachRepo.forks_count,
      starsCount: eachRepo.stars_count,
      avatarUrl: eachRepo.avatar_url,
    }))
    console.log(response)
    if (response.ok === true) {
      this.setState({repos: updatedData, isLoading: false})
    } else {
      this.setState({
        failureImg:
          'https://assets.ccbp.in/frontend/react-js/api-failure-view.png',
        isLoading: false,
      })
    }
  }
  repositories = id => {
    this.setState({activeId: id}, this.getRepositories)
  }
  render() {
    const {repos, isLoading, activeId, failureImg} = this.state
    return (
      <div className="app-container">
        <h1>Popular</h1>
        <ul className="ul-styling">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              eachLanguage={eachItem}
              key={eachItem.id}
              repositories={this.repositories}
              isActive={eachItem.id === activeId}
              failureImg={failureImg}
            />
          ))}
        </ul>
        <ul className="ul-styling">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
            </div>
          ) : (
            repos.map(each => (
              <RepositoryItem eachRepoInfo={each} key={each.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default GithubPopularRepos
