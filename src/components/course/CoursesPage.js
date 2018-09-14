import React,{PropTypes} from 'react';
import { Route, IndexRoute} from 'react-router';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
class CoursesPage extends React.Component {
  constructor(props,context){
    super(props,context);
  }

courseRow(course,index){
  return <div key={index}>{course.title}</div>;
}
  render() {

    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={this.props.courses}/>
      </div>
    );
  }
}

function mapStateToProps(state,ownProps){
  return {
    courses: state.courses
  };
}

CoursesPage.propTypes={
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch){
  return{
    createCourse: (course) => dispatch(courseActions.loadCourses(course))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
