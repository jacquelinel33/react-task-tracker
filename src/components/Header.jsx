import PropTypes from 'prop-types';
import Button from './Button';
import Task from './Tasks';


const Header = ({ title }) => {

  const onClick = () => {
    console.log('click');
  }
  return (
    <div className='header'>
      <h1>{title}</h1>
      <Button onClick={onClick} color='pink' text='Add'/>
      <Task/>
    </div>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header