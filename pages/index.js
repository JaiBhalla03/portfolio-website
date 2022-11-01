import Header from "../components/Header"
import {Fragment} from "react";

export default function Home() {
  return(
      <Fragment>
          <div>
              <Header/>
          </div>
          <div>
              This is the main body
          </div>
          <footer className="text-center">
              <p>Made by Jai Bhalla with ❤.</p>
          </footer>
      </Fragment>

  )
}
