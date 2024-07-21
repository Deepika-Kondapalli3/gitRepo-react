// Write your code here
import './index.css'
const LanguageFilterItem = props => {
  const {eachLanguage, repositories, isActive, failureImg} = props
  const {id, language} = eachLanguage
  const classname = isActive ? 'add-style' : ''
  const getRepos = () => {
    repositories(id)
  }
  if (failureImg === '') {
    return (
      <li className={`lang ${classname}`}>
        <button onClick={getRepos} className="button">{language} </button>
      </li>
    )
  } else {
    return (
      <div className="fail">
        <img src={failureImg} />
      </div>
    )
  }
}

export default LanguageFilterItem
