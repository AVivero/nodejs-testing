
const getCorrectIpAddress = privateIp => (process.env.FORCE_LOCAL_IP) ? require('ip').address() : privateIp;

module.exports = { getCorrectIpAddress };