
import './App.css';
import {useState} from "react"

function App() {
  return (
    <div className="App">
      <ExpenseTracker></ExpenseTracker>
      

      </div>
  );
}
  function ExpenseTracker() {
    const [currentPage, setCurrentPage] = useState("dashboar3d")

    return(
      <div className="ExpenseTracker">
      <form>
        <section type="income" name="income" id="income">
          <label for="Expenses">
            Expenses: 
          </label>
          <input type="text" name="income" id="income"></input>
          </section>
        </form>
        <section type="Dashboard" name="Dashboard" id="dashboard">
          <button  type="DashboardDashboard" name="DashboardDashboard" id="dashboarddashboard" onClick={()=>setCurrentPage("dashboarddashboard")}> Dashboard </button>
          <button  type="DashboardReports"   name="DashboardReports"   id="dashboardreports" onClick={()=>setCurrentPage("dashboardreports")}> Reports </button>
          <button  type="DashboardBudget"   name="DashboardBudget"   id="dashboardbudget" onClick={()=>setCurrentPage("dashboardbudget")} > Budget </button>
          <button  type="DashboardSettings"   name="DashboardSettings"   id="dashboardsettings" onClick={()=>setCurrentPage("dashboardsettings")} > Settings </button>
        </section>
        <section type="NavBar" name="NavBar" id="navbar"></section>
        <section type="mainA" name="mainA" id="mainA"></section>
        <section type="mainB" name="mainB" id="mainB">
          {currentPage === "dashboarddashboard" ? <Dashboard></Dashboard> : null}
          {currentPage === "dashboardreports" ? <Reports></Reports> : null}
          {currentPage === "dashboardbudget" ? <Budget></Budget> : null}
          {currentPage === "dashboardsettings" ? <Settings></Settings> : null}


        </section>
        <section type="mainA" name="Logo" id="Logo"></section>
       
  
      </div>
    )
    
  }
  function Dashboard() {
    return(
      <>
      <div type="BigBox" name="BigBox" id="bigbox">
        <div type="SmallBoxA" name="SmallBoxA" id="smallboxa">
          <div type="NetWorth" name="networth" id="networth">
            <h1>Networth: 180119</h1>
          </div>
          <div type="Cash" name="Cash" id="cash">
            <h1> Cash: 18000</h1>
            Alice's Wallet: 1205
            Bob's Wallet: 1549
          </div>
          <div type="BankAccount" name="Bank Account" id="bankaccount">
            <h1>Bank Account: 129000</h1>
            Checkings account: 2641822
            Savings account: 2451253
            
          </div>
          <div type="Credit" name="Credit" id="credit">
            <h1>Credit: 54319</h1>
            Card #1: MasterCard Credit Card: 28764
            Card #2: Visa Credit Card: 20412
            Card #3: Debit Card: 12090
          </div>
          
        </div>
        <div type="SmallBoxB" name="SmallBoxB" id="smallboxb">
          <div type="New Transactions" name-="New Transactions" id="newtransactions">
            <button type="Expenses" name="Expenses" id="expenses"><b>Expenses</b></button>
            <button type="Transfer" name="Transfer" id="transfer"><b>Transfer</b></button>
            <button type="Income" name="Income" id="income"> <b>Income</b></button>
          </div>
            {/* Recent transactions */}
            <div type="Recent Transactions" name="Recent Transacations" id="recenttransactions">
              <div type="Example1Transaction" name="Example1Transacation" class="exampletransaction">
                <h1>January 28, 2024 |    Atharva's Wallet    |   Expense: 20 USD</h1>
              </div>
              <div type="Example2Transaction" name ="Example2Transaction" class="exampletransaction">
                <h1>January 29, 1924 |    Atharva's Savings Account    |   Recieved: 200 USD</h1>
              </div>
            </div>
          </div>
        </div>
      
      </>
  )
}

document.getElementById("expenses").onmouseover = function() {expensesmouseOver()};
function expensesmouseOver() {
  document.getElementById("expenses").style.color = "gray";
}

document.getElementById("expenses").onmouseout = function() {expensesmouseOut()};
function expensesmouseOut() {
  document.getElementById("expenses").style.color = "black";
}

document.getElementById("transfer").onmouseover = function() {transfermouseOver()};
function transfermouseOver() {
  document.getElementById("transfer").style.color = "gray";
}

document.getElementById("transfer").onmouseout = function() {transfermouseOut()};
function transfermouseOut() {
  document.getElementById("transfer").style.color = "black";
}

document.getElementById("income").onmouseover = function() {incomemouseOver()};
function incomemouseOver() {
  document.getElementById("income").style.color = "gray";
}

document.getElementById("income").onmouseout = function() {incomemouseOut()};
function incomemouseOut() {
  document.getElementById("income").style.color = "black";
}
  function Reports() {
    return( 

      <h1> Christmas Holidays</h1>
    )
  }

  function Budget() {
    return(

      <h1>Happy New Year</h1>
    )
  }

  function Settings() {
    return(

      <h1> January </h1>
    )
  }
export default App;
