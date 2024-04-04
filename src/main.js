Vue.component('app-header', {
  template: `
    <header class="text-center text-uppercase py-2">
      <div class="my-3">
        <img class="logo mb-3" src="../public/images/icon.png" alt="School Logo" />
        <h2 class="schoolName text-white">maestro foundation</h2>
      </div>
    </header>
  `
})

Vue.component('app-body', {
  template: `
    <div class="className text-center py-5">
    <h3 class="text-uppercase">class register</h3>
      <div class="tableCont px-1">
        <table class="table-responsive text-center">
          <thead class="text-uppercase">
            <tr>
              <th colspan="7">
                <div class="search-cont input-group">
                  <input type="search" class="search form-control" placeholder="search student">
                </div>
              </th>
              <th>
                <label>day</label>
                <input class="form-control" type="date" name="day" id="day" v-model="day">
              </th>
              <th>
                <label>week</label>
                <select class="form-control" name="week" id="week" v-model="week">
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>14</option>
                  <option>15</option>
                </select>
              </th>
              <th>
                <label>term</label>
                <select class="form-control" name="term" id="term" v-model="term">
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </th>
              <th>
                <label>session</label>
                <select class="form-control" name="session" id="session" v-model="session">
                  <option></option>
                  <option>2019/2020</option>
                  <option>2020/2021</option>
                  <option>2021/2022</option>
                  <option>2022/2023</option>
                  <option>2023/2024</option>
                  <option>2024/2025</option>
                  <option>2025/2026</option>
                  <option>2026/2027</option>
                  <option>2027/2028</option>
                  <option>2020/2021</option>
                  <option>2029/2030</option>
                </select>
              </th>
            </tr>
            <tr>
              <th colspan="4"></th>
              <th colspan="5">days</th>
              <th colspan="2">attendance</th>
            </tr>
            <tr>
              <th class="sn">s/n</th>
              <th>photo</th>
              <th>name</th>
              <th>sex</th>
              <th>monday</th>
              <th>tuesday</th>
              <th>wednesday</th>
              <th>thursday</th>
              <th>friday</th>
              <th>
                <label>/</label>
                <div>
                  <small>total </small>|
                  <small>(%)</small>
                </div>
              </th>
              <th>
                <label>O</label>
                <div>
                  <small>total </small>|
                  <small>(%)</small>
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="text-upercase">
            <tr>
              <td>1</td>
              <td>
                <img src="../public/images/icon.png" alt="student's photo">
              </td>
              <td><router-link class="stProfile" to="">ibe austin</router-link></td>
              <td>m</td>
              <td>
                <select class="form-control" v-model="attendance" @change="attCount(attendance)">
                  <option></option>
                  <option>/</option>
                  <option>O</option>
                  <option>TX</option>
                  <option>HOLIDAY</option>
                </select>
              </td>
              <td>
                <select class="form-control" v-model="attendance" @change="attCount">
                  <option></option>
                  <option>/</option>
                  <option>O</option>
                  <option>TX</option>
                  <option>HOLIDAY</option>
                </select>
              </td>
              <td>
                <select class="form-control">
                  <option></option>
                  <option>/</option>
                  <option>O</option>
                  <option>TX</option>
                  <option>HOLIDAY</option>
                </select>
              </td>
              <td>
                <select class="form-control">
                  <option></option>
                  <option>/</option>
                  <option>O</option>
                  <option>TX</option>
                  <option>HOLIDAY</option>
                </select>
              </td>
              <td>
                <select class="form-control">
                  <option></option>
                  <option>/</option>
                  <option>O</option>
                  <option>TX</option>
                  <option>HOLIDAY</option>
                </select>
              </td>
              <td>
                <small></small>|<small></small>
              </td>
              <td>
                <small></small>|<small></small>
              </td>
            </tr>
            
            <tr>
              <td>2</td>
              <td>
                <img src="../public/images/icon.png" alt="student's photo">
              </td>
              <td><router-link class="stProfile" to="">ade ayomide</router-link></td>
              <td>f</td>
              <td>
                <select class="form-control">
                  <option></option>
                  <option>/</option>
                  <option>O</option>
                  <option>TX</option>
                  <option>HOLIDAY</option>
                </select>
              </td>
              <td>
                <select class="form-control">
                  <option></option>
                  <option>/</option>
                  <option>O</option>
                  <option>TX</option>
                  <option>HOLIDAY</option>
                </select>
              </td>
              <td>
                <select class="form-control">
                  <option></option>
                  <option>/</option>
                  <option>O</option>
                  <option>TX</option>
                  <option>HOLIDAY</option>
                </select>
              </td>
              <td>
                <select class="form-control">
                  <option></option>
                  <option>/</option>
                  <option>O</option>
                  <option>TX</option>
                  <option>HOLIDAY</option>
                </select>
              </td>
              <td>
                <select class="form-control">
                  <option></option>
                  <option>/</option>
                  <option>O</option>
                  <option>TX</option>
                  <option>HOLIDAY</option>
                </select>
              </td>
              <td>
                <small></small>|<small></small>
              </td>
              <td>
                <small></small>|<small></small>
              </td>
            </tr>
            
            <tr>
              <td>2</td>
              <td>
                <img src="../public/images/icon.png" alt="student's photo">
              </td>
              <td><router-link class="stProfile" to="">ibrahim musa</router-link></td>
              <td>m</td>
              <td>
                <select class="form-control">
                  <option></option>
                  <option>/</option>
                  <option>O</option>
                  <option>TX</option>
                  <option>HOLIDAY</option>
                </select>
              </td>
              <td>
                <select class="form-control">
                  <option></option>
                  <option>/</option>
                  <option>O</option>
                  <option>TX</option>
                  <option>HOLIDAY</option>
                </select>
              </td>
              <td>
                <select class="form-control">
                  <option></option>
                  <option>/</option>
                  <option>O</option>
                  <option>TX</option>
                  <option>HOLIDAY</option>
                </select>
              </td>
              <td>
                <select class="form-control">
                  <option></option>
                  <option>/</option>
                  <option>O</option>
                  <option>TX</option>
                  <option>HOLIDAY</option>
                </select>
              </td>
              <td>
                <select class="form-control">
                  <option></option>
                  <option>/</option>
                  <option>O</option>
                  <option>TX</option>
                  <option>HOLIDAY</option>
                </select>
              </td>
              <td>
                <small></small>|<small></small>
              </td>
              <td>
                <small></small>|<small></small>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="4">total</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td class="totalAttendance">
                <span>200</span> | <span>200%</span>
              </td>
              <td class="totalAttendance">
                <span>200</span> | <span>200%</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="sessionAttendance">
        <div class="container d-md-flex justify-content-md-between px-md-5">
          <div class="col-12 col-md-5 my-2 p-2">
            <button class="sessionAttendance-btn btn w-100">save attendance</button>
          </div>
          <div class="col-12 col-md-5 my-2 p-2">
            <button class="sessionAttendance-btn btn w-100" data-toggle="collapse" data-target="#sessionAttendance">session attendance</button>
          </div>
        </div>
        <div id="sessionAttendance" class="collapse my-5">
          <div class="text-center text-danger m-4">
            <i><b>NOTE:</b> Please input accurate values from previous sessions for average total or percentage attendance.</i>
          </div>
          <div class="computeCont">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text"><b>first term</b></span>
              </div>
              <input type="text" class="ftAttend form-control" placeholder="enter first term value">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text"><b>second term</b></span>
              </div>
              <input type="text" class="stAttend form-control" placeholder="enter second term value">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text"><b>third term</b></span>
              </div>
              <input type="text" class="ttAttend form-control" placeholder="enter third term value">
            </div>
            
            <div class="d-flex justify-content-around">
              <input class="compute-btn btn shadow mt-4" type="submit" value="COMPUTE">
            </div>
          </div>
          <div class="mt-3">
            <p class="computedResult text-uppercase"></p>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      week: '',
      term: '',
      session: '',
      day: '',
      attendance: '',
      present: '/',
      absent: 'O',
      transfered: 'TX',
      prCount: 0,
      abCount: 0,
      txCount: 0,
      // holiday: 0,
      // timesOpened: (5 - holiday)
    }
  },
  computed: {
    
  },
  methods: {
    getDay() {
      console.log(this.day)
    },
    attCount(atx) {
      console.log(`present: ${this.prCount} | absent: ${this.abCount} | transfered: ${this.txCount}`)
    }
  },
})

Vue.component('app-footer', {
  template: `
    <footer class="text-center text-uppercase text-white py-4">
      <div>&copy; Maestro Founation</div>
    </footer>
  `
})

//Vue Router
const home = {
  template: `
    <div class = "text-primary">I am a blue Route Content</div>
  `
}
const admin = {
  template: `
    <div class = "text-success">I am a green Route Content</div>
  `
}

const routes = [
	{
    path: '/home', 
    component: home
  },
	{
    path: '/admin',
    component: admin
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
// -----------------------------------------------------

new Vue({
  el: '#attendance',
  router
})