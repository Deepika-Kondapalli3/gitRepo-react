// Write your code here
import './index.css'
const RepositoryItem = props => {
  const {eachRepoInfo} = props
  const {name, id, issuesCount, forksCount, starsCount, avatarUrl} =
    eachRepoInfo
  return (
    <li className="repo-card">
      <img src={avatarUrl} className="logo" alt={name}/>
      <h1 className="head">{name}</h1>
      <div className="content">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="image"
        />
        <p>{starsCount} stars</p>
      </div>
      <div className="content">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
          alt="forks"
          className="image"
        />
        <p>{forksCount} forks</p>
      </div>
      <div className="content">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="image"
        />
        <p>{issuesCount} issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
