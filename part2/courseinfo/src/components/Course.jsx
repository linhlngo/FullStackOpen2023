const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => <p> <b>total of { parts.map( part => part.exercises).reduce((s,p) => s + p)} exercises </b></p>

const Part = ({ part }) => 
  <p>
    <b></b>
    {part.name} {part.exercises}
  </p>

const Content = ({parts}) => 
<div>
{ parts.map((part) => (
  <Part key={part.id} part={part} />
))}
</div>



const Course = ({course}) => 
<div>
   <Header course={course.name} />
  < Content parts={course.parts}/>
  < Total parts={course.parts}/>
</div>

export default Course