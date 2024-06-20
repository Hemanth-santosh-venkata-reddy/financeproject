import './Finance_Login.css'
import PersonIcon from "@mui/icons-material/Person";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import logo from '../images/logo.png'
import { useNavigate } from "react-router-dom";

const Finance_Login = () => {
  const navigate = useNavigate();
  const redirecttodashboard=()=>{
    navigate('/Dashboard');
  }


  return (
    <>
      <div className="finance_login">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-10">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-lg-start justify-content-center">
                  <div className="logo">
                    <img src={logo} alt="logo" width="100%"/>
                  </div>
                  <h5 className="m-0">Sree Finance Ltd</h5>
                </div>
                <div className="card-body p-5 pt-2">
                <div className="header text-center">
                  <div className="text">Login</div>
                  <div className="underline m-auto"></div>
                </div>
                <form>
                  <div className="inputs">
                    <div className="input">
                      <div className="img">
                        <PersonIcon />
                      </div>
                      <input
                        type="text"
                        placeholder="Name..."
                        autoComplete="off"
                      />
                    </div>

                    <div className="input">
                      <div className="img">
                        <IoMdMail />
                      </div>
                      <input
                        type="email"
                        placeholder="Email..."
                        autoComplete="off"
                      />
                    </div>
                    <div className="input mb-3">
                      <div className="img">
                        <FaLock />
                      </div>
                      <input
                        type="password"
                        placeholder="password..."
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="forget-password">
                    forgot Password <span>clickme</span>
                  </div>

                  <div className="submit-container">
                    <button className="submit" onClick={()=>{redirecttodashboard()}}>Log in</button>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finance_Login;
