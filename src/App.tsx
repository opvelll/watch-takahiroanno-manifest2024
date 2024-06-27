import repoData from "./assets/repo.json"

function App() {

  return (
    <>
      <div className="text-3xl">
        {repoData.name}
      </div>
    </>
  )
}

export default App
