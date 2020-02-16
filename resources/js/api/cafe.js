/**
 * Imports the Roast API URL from the config.
 */
import {ROAST_CONFIG} from '../config.js';

export default {
    /**
     * 获取咖啡店列表
     * GET /api/v1/cafes
     */
    getCafes: function () {
        return axios.get(ROAST_CONFIG.API_URL + '/cafes');
    },

    /**
     * 获取咖啡店详情
     * GET /api/v1/cafes/{cafeID}
     */
    getCafe: function (cafeID) {
        return axios.get(ROAST_CONFIG.API_URL + '/cafes/' + cafeID);
    },

    /**
     * 新增咖啡店
     * POST /api/v1/cafes
     */
    postAddNewCafe: function (name, address, city, state, zip) {
        return axios.post(ROAST_CONFIG.API_URL + '/cafes',
            {
                name: name,
                address: address,
                city: city,
                state: state,
                zip: zip
            }
        );
    }
}