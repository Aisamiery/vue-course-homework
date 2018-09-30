/**
 * Created by PhpStorm on 30.09.2018.
 * Author: Shabalin Pavel
 * Email: aisamiery@gmail.com
 */

import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:3000'
})
