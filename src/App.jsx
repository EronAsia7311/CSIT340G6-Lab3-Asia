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

const Total = ({ units }) => <p>Number of units {units}</p>

const App = () => {
  const course = 'BS Information Technology'
  const part1 = {
    name: 'Networking 1',
    units: 3
  }
  const part2 = {
    name: 'Data Analytics 1',
    units: 3
  }
  const part3 = {
    name: 'Capstone and Research 2',
    units: 3
  }
  const parts = [part1, part2, part3]
  const total = parts.reduce((sum, part) => sum + part.units, 0)

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total units={total} />
    </div>
  )
}

export default App