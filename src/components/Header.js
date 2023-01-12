import propTypes from 'prop-types'
import Button from './Button'

const Header = ({onClick , formShown}) => {

  return (
    <div className='head-container'>
        <h1>Task Tracker</h1>     
        <Button color={formShown? 'red' : 'green'} text={formShown?'Close' : 'Add'} onclick={onClick} />
    </div>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: propTypes.string
}

export default Header