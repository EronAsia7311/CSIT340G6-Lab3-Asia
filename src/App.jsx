const Header = ({ course }) => {
  console.log(course)
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part = ({ name, units }) => (
  <p>
    {name} {units}
  </p>
)

const Content = ({ parts }) => {
  return (
    <div>
      <Part name={parts[0].name} units={parts[0].units} />
      <Part name={parts[1].name} units={parts[1].units} />
      <Part name={parts[2].name} units={parts[2].units} />
    </div>
  )
}

const Total = ({ units }) => {
  const total = units.reduce((sum, part) => sum + part.units, 0)
  return <p>Number of units {total}</p>
}

const App = () => {
  const course = {
    name: 'BS Information Technology',
    parts: [
      {
        name: 'Networking 1',
        units: 3
      },
      {
        name: 'Data Analytics 1',
      units: 3
      }, 
      {
        name: 'Capstone and Research 2',
        units: 3
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total units={course.parts} />
    </div>
  )
}

export default App