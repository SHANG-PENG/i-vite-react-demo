import React, { useState, useEffect } from 'react';
import {
  PaymentRequestButtonElement,
  useStripe,
} from '@stripe/react-stripe-js';

const App = () => {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);

  const handlePaymentMethodReceived = async (event) => {
    // Send the payment details to our function.
    // const paymentDetails = {
    //   payment_method: event.paymentMethod.id,
    //   shipping: {
    //     name: event.shippingAddress.recipient,
    //     phone: event.shippingAddress.phone,
    //     address: {
    //       line1: event.shippingAddress.addressLine[0],
    //       city: event.shippingAddress.city,
    //       postal_code: event.shippingAddress.postalCode,
    //       state: event.shippingAddress.region,
    //       country: event.shippingAddress.country,
    //     },
    //   },
    // };


    const paymentDetails = {
      "transaction_type": 1,
      "merchant_id": "01",
      "terminal_id": "pd0001",
      "transaction_amount": 1099,

      "order_number": "1122334355",
      "reference_number": "1122234455",
      "entry_mode": 7,
      "payment_processer": 1,
      "card_encrypt_info": {
        "encryption_data": "eyJkYXRhIjoiVldiVkZ0cVJ3dGZjWkUzXC81TWRYYWx3RkF3WCtxXC9xbjFnOGFaSVhGV1wvUmVUZ29EcTJRYXAyQnM3NEp0MlwvV0VRY3pGVXFBVUx0S3RDb0lRVGxsbXpWeVNCWkRjYm9uMVwvNVA2UkV0TkR0cm9laUkwNTNFeitzMTNTVkhya3JxK3lOS2NCY1BYTlZZQ2xoWjhFbjFDS3gyZ01BaEdpM3FWZmo3U0I2NW92ZVlEUk96cHo4Y0ZUalwvVHBtWEhTMHZveVVkSHplemVDemR1MXpoZ2R6ZERVNUZwcnFHeHgrNjJac1BkZmZxZk9ndWpvWGIyY3VxY25hZUptWm9lVm5ncThuR2x1TXRwdzVcL1NER0VsY1hFNkNqeHR2d1lzNHBJc2lTdzBXWUFuOVEwMFljS2xUdTZ4SlwvQjZtT0FkK2drU0pNb1FMR2VtaGl6eWxWeGJyODZcL1c5VU5MWWY4Wms3OFpUXC92TlVEWm1TMFV1bDRhWm1ycXpYRDM5a1NlWXpVemdmUlV4Wlk4cEJwMHIwcWFoaHlvV1JjQ1kzTjNsS2ZraVVFc2lOUVZ6WHM9Iiwic2lnbmF0dXJlIjoiTUlBR0NTcUdTSWIzRFFFSEFxQ0FNSUFDQVFFeERUQUxCZ2xnaGtnQlpRTUVBZ0V3Z0FZSktvWklodmNOQVFjQkFBQ2dnRENDQStNd2dnT0lvQU1DQVFJQ0NFd3dRVWxSblZRMk1Bb0dDQ3FHU000OUJBTUNNSG94TGpBc0JnTlZCQU1NSlVGd2NHeGxJRUZ3Y0d4cFkyRjBhVzl1SUVsdWRHVm5jbUYwYVc5dUlFTkJJQzBnUnpNeEpqQWtCZ05WQkFzTUhVRndjR3hsSUVObGNuUnBabWxqWVhScGIyNGdRWFYwYUc5eWFYUjVNUk13RVFZRFZRUUtEQXBCY0hCc1pTQkpibU11TVFzd0NRWURWUVFHRXdKVlV6QWVGdzB4T1RBMU1UZ3dNVE15TlRkYUZ3MHlOREExTVRZd01UTXlOVGRhTUY4eEpUQWpCZ05WQkFNTUhHVmpZeTF6YlhBdFluSnZhMlZ5TFhOcFoyNWZWVU0wTFZCU1QwUXhGREFTQmdOVkJBc01DMmxQVXlCVGVYTjBaVzF6TVJNd0VRWURWUVFLREFwQmNIQnNaU0JKYm1NdU1Rc3dDUVlEVlFRR0V3SlZVekJaTUJNR0J5cUdTTTQ5QWdFR0NDcUdTTTQ5QXdFSEEwSUFCTUlWZCszcjFzZXlJWTlvM1hDUW9TR054N0M5Ynl3b1BZUmdsZGxLOUtWQkc0TkNEdGdSODBCK2d6TWZIRlREOStzeUlOYTYxZFR2OUpLSmlUNThEeE9qZ2dJUk1JSUNEVEFNQmdOVkhSTUJBZjhFQWpBQU1COEdBMVVkSXdRWU1CYUFGQ1B5U2NSUGsrVHZKK2JFOWloc1A2SzdcL1M1TE1FVUdDQ3NHQVFVRkJ3RUJCRGt3TnpBMUJnZ3JCZ0VGQlFjd0FZWXBhSFIwY0RvdkwyOWpjM0F1WVhCd2JHVXVZMjl0TDI5amMzQXdOQzFoY0hCc1pXRnBZMkV6TURJd2dnRWRCZ05WSFNBRWdnRVVNSUlCRURDQ0FRd0dDU3FHU0liM1kyUUZBVENCXC9qQ0J3d1lJS3dZQkJRVUhBZ0l3Z2JZTWdiTlNaV3hwWVc1alpTQnZiaUIwYUdseklHTmxjblJwWm1sallYUmxJR0o1SUdGdWVTQndZWEowZVNCaGMzTjFiV1Z6SUdGalkyVndkR0Z1WTJVZ2IyWWdkR2hsSUhSb1pXNGdZWEJ3YkdsallXSnNaU0J6ZEdGdVpHRnlaQ0IwWlhKdGN5QmhibVFnWTI5dVpHbDBhVzl1Y3lCdlppQjFjMlVzSUdObGNuUnBabWxqWVhSbElIQnZiR2xqZVNCaGJtUWdZMlZ5ZEdsbWFXTmhkR2x2YmlCd2NtRmpkR2xqWlNCemRHRjBaVzFsYm5SekxqQTJCZ2dyQmdFRkJRY0NBUllxYUhSMGNEb3ZMM2QzZHk1aGNIQnNaUzVqYjIwdlkyVnlkR2xtYVdOaGRHVmhkWFJvYjNKcGRIa3ZNRFFHQTFVZEh3UXRNQ3N3S2FBbm9DV0dJMmgwZEhBNkx5OWpjbXd1WVhCd2JHVXVZMjl0TDJGd2NHeGxZV2xqWVRNdVkzSnNNQjBHQTFVZERnUVdCQlNVVjl0djFYU0Job21KZGk5K1Y0VUg1NXRZSkRBT0JnTlZIUThCQWY4RUJBTUNCNEF3RHdZSktvWklodmRqWkFZZEJBSUZBREFLQmdncWhrak9QUVFEQWdOSkFEQkdBaUVBdmdsWEgrY2VIbk5iVmVXdnJMVEhMK3RFWHpBWVVpTEhKUkFDdGg2OWIxVUNJUURSaXpVS1hkYmRickYwWURXeEhyTE9oOCtqNXE5c3ZZT0FpUTNJTE4ycVl6Q0NBdTR3Z2dKMW9BTUNBUUlDQ0VsdEw3ODZtTnFYTUFvR0NDcUdTTTQ5QkFNQ01HY3hHekFaQmdOVkJBTU1Fa0Z3Y0d4bElGSnZiM1FnUTBFZ0xTQkhNekVtTUNRR0ExVUVDd3dkUVhCd2JHVWdRMlZ5ZEdsbWFXTmhkR2x2YmlCQmRYUm9iM0pwZEhreEV6QVJCZ05WQkFvTUNrRndjR3hsSUVsdVl5NHhDekFKQmdOVkJBWVRBbFZUTUI0WERURTBNRFV3TmpJek5EWXpNRm9YRFRJNU1EVXdOakl6TkRZek1Gb3dlakV1TUN3R0ExVUVBd3dsUVhCd2JHVWdRWEJ3YkdsallYUnBiMjRnU1c1MFpXZHlZWFJwYjI0Z1EwRWdMU0JITXpFbU1DUUdBMVVFQ3d3ZFFYQndiR1VnUTJWeWRHbG1hV05oZEdsdmJpQkJkWFJvYjNKcGRIa3hFekFSQmdOVkJBb01Da0Z3Y0d4bElFbHVZeTR4Q3pBSkJnTlZCQVlUQWxWVE1Ga3dFd1lIS29aSXpqMENBUVlJS29aSXpqMERBUWNEUWdBRThCY1JoQm5YWklYVkdsNGxnUWQyNklDaTc5NTdyazNnamZ4TGsrRXpWdFZtV3pXdUl0Q1hkZzBpVG51NkNQMTJGODZJeTNhN1puQyt5T2dwaFA5VVJhT0I5ekNCOURCR0JnZ3JCZ0VGQlFjQkFRUTZNRGd3TmdZSUt3WUJCUVVITUFHR0ttaDBkSEE2THk5dlkzTndMbUZ3Y0d4bExtTnZiUzl2WTNOd01EUXRZWEJ3YkdWeWIyOTBZMkZuTXpBZEJnTlZIUTRFRmdRVUlcL0pKeEUrVDVPOG41c1QyS0d3XC9vcnY5TGtzd0R3WURWUjBUQVFIXC9CQVV3QXdFQlwvekFmQmdOVkhTTUVHREFXZ0JTN3NONmhXRE9JbXFTS21kNit2ZXV2MnNza3F6QTNCZ05WSFI4RU1EQXVNQ3lnS3FBb2hpWm9kSFJ3T2k4dlkzSnNMbUZ3Y0d4bExtTnZiUzloY0hCc1pYSnZiM1JqWVdjekxtTnliREFPQmdOVkhROEJBZjhFQkFNQ0FRWXdFQVlLS29aSWh2ZGpaQVlDRGdRQ0JRQXdDZ1lJS29aSXpqMEVBd0lEWndBd1pBSXdPczl5ZzFFV21iR0crelhEVnNwaXZcL1FYN2RrUGRVMmlqcjd4bklGZVFyZUorSmozbTFtZm1OVkJEWStkNmNMK0FqQXlMZFZFSWJDakJYZHNYZk00TzVCblwvUmQ4TENGdGxrXC9HY21tQ0VtOVUrSHA5RzVuTG13bUpJV0VHbVE4SmtoMEFBREdDQVlnd2dnR0VBZ0VCTUlHR01Ib3hMakFzQmdOVkJBTU1KVUZ3Y0d4bElFRndjR3hwWTJGMGFXOXVJRWx1ZEdWbmNtRjBhVzl1SUVOQklDMGdSek14SmpBa0JnTlZCQXNNSFVGd2NHeGxJRU5sY25ScFptbGpZWFJwYjI0Z1FYVjBhRzl5YVhSNU1STXdFUVlEVlFRS0RBcEJjSEJzWlNCSmJtTXVNUXN3Q1FZRFZRUUdFd0pWVXdJSVREQkJTVkdkVkRZd0N3WUpZSVpJQVdVREJBSUJvSUdUTUJnR0NTcUdTSWIzRFFFSkF6RUxCZ2txaGtpRzl3MEJCd0V3SEFZSktvWklodmNOQVFrRk1ROFhEVEl6TVRJeU16QXpNVFF3T1Zvd0tBWUpLb1pJaHZjTkFRazBNUnN3R1RBTEJnbGdoa2dCWlFNRUFnR2hDZ1lJS29aSXpqMEVBd0l3THdZSktvWklodmNOQVFrRU1TSUVJTU5qVHVkUUpjc01FWVpyemY2Q2oyMjZNS3VZREthMklNUWhOY0tja3ZDNk1Bb0dDQ3FHU000OUJBTUNCRWN3UlFJZ1NXeUx1ckNQUmhPcWFUdytKYmhobm9HVW1KSVJLOUZMbjhyUEYwUHo4bWtDSVFDNktJcVwvU0ZhRHJvRktSd25tT3hVNEI3WVIrWEdad2tWbFk4dUoxbGJPQWdBQUFBQUFBQT09IiwiaGVhZGVyIjp7InB1YmxpY0tleUhhc2giOiJNVFB2WkJnbFwvTWZPdisyaytWTXlIZE41em4xeitSREZ3b3pSRDNmQmduOD0iLCJlcGhlbWVyYWxQdWJsaWNLZXkiOiJNRmt3RXdZSEtvWkl6ajBDQVFZSUtvWkl6ajBEQVFjRFFnQUU4YnRIQ0d1bUQxUlJUdXVIUnErMXVOaEZ5S1VoOUxDUnduYkZoWkJUMzBZWEx5WjBMc0NwXC9DVHdxaW9rTVwvNUY3VWhTYVIzUlMrWlZ6T3l4cWdzTzBBPT0iLCJ0cmFuc2FjdGlvbklkIjoiNDBhYWE3NDhiMzBkOTIwYmE5YzhiYTk4ZDQ2ODhkZWJlZGMzYjY5NWM2MzAzZjgzOGE4YTYyZmU5NjgxNDFlMiJ9LCJ2ZXJzaW9uIjoiRUNfdjEifQ==",
        "encrypt_type": 6
      }
    }

    const response = await fetch('https://dev-api.aldelo.cloud/apgs-ms/rest/v1/api/input', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paymentDetails }),
    }).then((res) => {
      return res.json();
    });
    if (response.error) {
      // Report to the browser that the payment failed.
      console.log(response.error);
      event.complete('fail');
    } else {
      // Report to the browser that the confirmation was successful, prompting
      // it to close the browser payment method collection interface.
      event.complete('success');
      // Let Stripe.js handle the rest of the payment flow, including 3D Secure if needed.
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        response.paymentIntent.client_secret
      );
      if (error) {
        console.log(error);
        return;
      }
      if (paymentIntent.status === 'succeeded') {
        history.push('/success');
      } else {
        console.warn(
          `Unexpected status: ${paymentIntent.status} for ${paymentIntent}`
        );
      }
    }
  };

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: 'Demo total',
          amount: 1350,
        },
        requestPayerName: true,
        requestPayerEmail: true,
        requestShipping: true,
        shippingOptions: [
          {
            id: 'standard-global',
            label: 'Global shipping',
            detail: 'Arrives in 5 to 7 days',
            amount: 350,
          },
        ],
      });

      // Check the availability of the Payment Request API first.
      pr.canMakePayment().then((result) => {
        if (result) {
          pr.on('paymentmethod', handlePaymentMethodReceived);
          setPaymentRequest(pr);
        }
      });
    }
  }, [stripe]);

  if (paymentRequest) {
    return <PaymentRequestButtonElement options={{ paymentRequest }} />;
  }

  // Use a traditional checkout form.
  // return 'Insert your form or button component here.';
  return (
    <apple-pay-button buttonstyle="black" type="plain" locale="en-US"
      onclick="onApplePayButtonClicked()">
    </apple-pay-button>
  )
};

export default App
