const Header = ({ course }) => {
  
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <p key={part.name}>
        {part.name} {part.exercises}
      </p>
    ))}
  </>
)

const Total = ({ units }) => <p>Number of units {units}</p>

const App = () => {
  const course = 'BS Information Technology'
  const part1 = 'Networking 1'
  const units1 = 3
  const part2 = 'Data Analytics 1'
  const units2 = 3
  const part3 = 'Capstone and Research 2'
  const units3 = 3
  const total = units1 + units2 + units3

  return (
    <div>
      <Header course={course} />
      <Content parts={[{ name: part1, units: units1 }, { name: part2, units: units2 }, { name: part3, units: units3 }]} />
      <Total units={total} />
    </div>
  )
}

export default App