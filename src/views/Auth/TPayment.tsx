import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import crypto from 'crypto-js';

import NodeRSA from "node-rsa";

const TPayment = () => {
  let { tk } = useParams();
  console.log('tk2222', tk)
  useEffect(() => {
    // if(tk) {
    //   console.log('tk', tk)
    //   // const publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7ggJ7s4ewQL02UFgF0uDwJxpu1ediPbCMC0nkoDBjeNQ0nHitK4GXfAR5nBmzIvDaXr2xUaEdkpVJFl19akKyikHc/+V5i8ueb7/x3Hz/napEJzt2zbGUqpiQILZuRkRw0+aYMkxGTJ0cwV7smIYyEUDfgeD5m40QDCxfoeq+g9x9JM/tZl5M0zUpYJa4pEHRoy0RNxfeARG/apVJxOLdmybPjrTGV+5WpdkSN6hAU/rlFqHuDAV1Gy4egcs5AiYKTgn+7b4AlbDqIq9cOOCTLYKragFoEfBrYhoyt4Era3S82RaFe7pHxf7kVygr32MFqOT8ibN0f7krZxkl5FGJQIDAQAB'
    //   const publickKey = `-----BEGIN PUBLIC KEY-----
    //   MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJ+GbO3qKMcT/4GzUM39qszVhuOZlhv1
    //   fo4X873qKMdRL2xb+zYgry7GPthPubXCRqdogwh6pu5LrcMoFXeB+X0CAwEAAQ==
    //   -----END PUBLIC KEY-----
    //   `
    //   // const privateKey = 'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDuCAnuzh7BAvTZQWAXS4PAnGm7V52I9sIwLSeSgMGN41DSceK0rgZd8BHmcGbMi8NpevbFRoR2SlUkWXX1qQrKKQdz/5XmLy55vv/HcfP+dqkQnO3bNsZSqmJAgtm5GRHDT5pgyTEZMnRzBXuyYhjIRQN+B4PmbjRAMLF+h6r6D3H0kz+1mXkzTNSlglrikQdGjLRE3F94BEb9qlUnE4t2bJs+OtMZX7lal2RI3qEBT+uUWoe4MBXUbLh6ByzkCJgpOCf7tvgCVsOoir1w44JMtgqtqAWgR8GtiGjK3gStrdLzZFoV7ukfF/uRXKCvfYwWo5PyJs3R/uStnGSXkUYlAgMBAAECggEAeGmGpNCOjDMzq6e/tWkVCF3XutbSsZOqnnZpO1p5D477tsm31pDmVaT5WSppRnY5b2Wt6hQHNFPcCFxdKN3PwH7K72pO6Tfa+emeOMWzmXlrgyTvymJGJ1FcDKhk/Zbp/nSJcwa0GLwGXp1aet3XDZCj+KBSoEIFmqdHUuvMmVw3EvFZ6OS7oiykh/f2k59rHkfpmz2u/40bz694TvSIRoHW8/DpDR00yaAJ0Ky4Tu3f68MAEwP+7ZzdvTSsDopvDYHfkFFUuqWcGnGxg3caUXVkRTHtIenESmuXdz9mG1RXVYejy5RU2qZCnBzqMe5t4e+/to0/d5OHphMbbUndYQKBgQD56NnULvYMQ7Yumh6CEcavCCsCJHfgKb3OucT7BOCGnVEqcFm7BOec74+LkS7idaEgk2t759N73Cv5Fvdk1stcePf+rqPTYUZxmP8RHkOm+/N2QvMK5JT63x3iD0ZLQKkKjgPo7UKgCssydwgLyhrmqfF0JNJi2z5GGddYAUiCaQKBgQDz1RTsl/AbPX/BfZ1K8FtocEWS7+XH90H9BQHyJCOBDXHKKYunFkgk4+Kvm+g6rwAydH+bVKiJrghmK0TGIpQRUc5hY/xw0fCh32D05AlAvJTafsBMCXkMCc4hXsseIqWVaP2fvCR4tw8CZUIpri1zyz56WGQ5YjtY++JhXIH2XQKBgEaPgDFwsPf1hlLSIRsIedihrcMFGPOp1XWw7fUSA3L+qBQbdLphQCQHX7hAXcSDAeN4vDhX1FZ8a84Atgk6vGB3p025cXgVVxZr5Fio+uEC8lLJxGWm9ImAxac2ONq2fwQD5Qa3NsCJS6YMBbGOdtn50brBSsWusX6JfUvT0O1BAoGAb7/0uwpXjOR+rNs5P6MxAYiTGmjAUwlLQP8OiT9u1jKnOBQaYRWhMucOeZVmtZ6G5Jjn8vS12YPdbZXfCz/FxLpNb+03QS22rzmFYjcw1m6XehwlXbPpuk60Hi8nwEP4x6U6t/6uaHTdeCeYTyn4wt0fYUspg/M1Z+7pLd4L4jECgYEAw5VLYgBrXVAVOkzGHGwhZlzi0fPDppgrQPzNhYRbWdfXHAcs4kVvH/WnhgL6/Oun8FcAyNcgwsNY/y66x6WfENTdx+UgKhRBji7zIiozkJ24dH+wb/jmo32Bs2p7xfJbQ1ihUaofHe7NYP+0PRuWh5VmIMurQzN99j9HPadD9zg='
    //   const privateKey = `-----BEGIN PRIVATE KEY-----
    //   MIIBVQIBADANBgkqhkiG9w0BAQEFAASCAT8wggE7AgEAAkEAn4Zs7eooxxP/gbNQ
    //   zf2qzNWG45mWG/V+jhfzveoox1EvbFv7NiCvLsY+2E+5tcJGp2iDCHqm7kutwygV
    //   d4H5fQIDAQABAkBFcW4fz2w65VC3tEh7s25Txqv2jhhTSXXzAyg+xx1DTjslSA4M
    //   tawe5z2QTlYug0GPLh3qaPy2eL9DD15ls1CBAiEAy36lXpeD+E0eqCRP4KZ7V1rd
    //   kcpbM8KepeEc6CA2gOECIQDIr3j4ltyY1WcewHSM8wQi/Ytj4ZKl+TSu1VvTRCFg
    //   HQIhAKXFidnA/FTuHidDTX7ooFnNP+pgOmO0C6F9/RpsA3qBAiBRMk3rpn5Sh+VV
    //   F+EQNjLyRUtkehvvc0jRhBnG/MXUMQIhAJrtrrdwzzSbEreKF4M5ZdXUZ4TntYNC
    //   AOlrMCtNmq+l
    //   -----END PRIVATE KEY-----
    //   `

    //   // const aaa = '4VfEglW89BYL1rCETnT0eJ3QxKlp5piEF8QMbRCiqxqqpacPrP7K/dhMq7fqSkR5f/+2oUM0VFe41uA9Erb+g4RtN/r1Mno3zN/6vFd63fA34PFAfY07oAqWG3x/QbSvnOHiC7PZx3x2Ozmral0s2BlSvhSL03rzLUMTA1kynbJOW2Rz77xcicWMC9lBL+26uL4tUGR7gp3QbD6RSw/hkPh7+3gUq/Jd8GSdh72ZszTWUipgVpKAHOMvjYBSczdyE/v+o/afaN8nqh7AsE8HwO7iQ4lNyJm0ClX+jP9lNupiarjFE3HXhqnvRgagwoIeF649GWBoSmDIiiroV218yA=='
    //   const aaa = 'iPhXal1VGtR4GUyrleuukWi4TzfyJwhgBsIf0q+0vbAWNCOzr8xHxKqgOd4GcSI2j/KzGPL2KRTIanyNlKevAA=='
    //   // const token = crypto.AES.decrypt(aaa, privateKey).toString(crypto.enc.Utf8)
    //   // const token = crypto.privateDecrypt(privateKey, aaa);  
    //   const bf = Buffer.from(aaa, 'base64');
    //   const token = new NodeRSA( privateKey, 'utf8', {b: 512}).decrypt(bf, 'utf8');
    //   // const token = ''
    //   console.log('token', token)
    // }
  }, [tk])

  return (
    <div>
      <h2>Order Payment</h2>
      <form id="myForm">
        <label style={{ fontSize: 20, fontWeight: 'bold', width: '100%', textAlign: 'center' }}>Amount：$99.99</label>
        <hr />
        <label>Card Type</label>
        <div className="form-group">
          <select id="transaction_type" name="transaction_type">
            <option value="1">MasterCard</option>
            <option value="2">Visa</option>
            <option value="3">AMEX</option>
            <option value="4">Discover</option>
          </select>
        </div>

        <label>Card Number</label>
        <div className="form-group">
          <input type="text" value="" placeholder="****Last 4" />
        </div>
        <div className="form-group">
          <input type="button" value="Pay" onClick={() => {
            alert('Payment Successful!'); window.open('http://localhost:8002/?r=ok', '_self'); return false;
          }} style={{ marginTop: 10, backgroundColor: '#000', color: '#fff', border: 'none', width: '100%', borderRadius: 5, height: 48, lineHeight: '48px', cursor: 'pointer' }} />
        </div>
      </form>
    </div>
  )
};

export default TPayment;