import { useState } from "react"


function App() {
  const [formData, setFormData] = useState({
    text: "",
    option_a: "",
    option_b: "",
    option_c: "",
    option_d: "",
    correct_option: ""
  })

  const submitQuestion = async () => {
    // console.log("data", formData);
    // fetch("http://localhost:8080/insertDataInDb", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(formData)
    // }).then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err))

    let response = await fetch("http://localhost:8080/insertDataInDb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    let data = await response.json()
    if (data.success) {
      alert(data.message)
    }
    else {
      alert("Validation error")
    }
  }
  return (
    <form onSubmit={e => e.preventDefault()} className=' text-red-600 flex gap-2 flex-col w-100 justify-center border'>

      <h2>Post question</h2>

      <div className="border-2">
        <span>Question</span>
        <input type="text" className="w-full" placeholder="type your question here.." onChange={e => {
          setFormData(prevData => {
            return { ...prevData, text: e.target.value }
          })
        }} value={formData.text} />
      </div>


      <div className="border-2">
        <input type="text" className="w-full" onChange={e => {
          setFormData(prevData => {
            return { ...prevData, option_a: e.target.value }
          })
        }} value={formData.option_a} />
      </div>
      <div className="border-2">
        <input type="text" className="w-full" onChange={e => {
          setFormData(prevData => {
            return { ...prevData, option_b: e.target.value }
          })
        }} value={formData.option_b} />
      </div>

      <div className="border-2">
        <input type="text" className="w-full" onChange={e => {
          setFormData(prevData => {
            return { ...prevData, option_c: e.target.value }
          })
        }} value={formData.option_c} />
      </div>
      <div className="border-2">
        <input type="text" className="w-full" onChange={e => {
          setFormData(prevData => {
            return { ...prevData, option_d: e.target.value }
          })
        }} value={formData.option_d} />
      </div>

      <div className="border-2">
        <input type="text" className="w-full" onChange={e => {
          setFormData(prevData => {
            return { ...prevData, correct_option: e.target.value }
          })
        }} value={formData.correct_option} />
      </div>
      <div onClick={submitQuestion} className="bg-slate-500 p-2 text-white cursor-pointer">
        <button>Submit</button>
      </div>

    </form>
  )
}

export default App
