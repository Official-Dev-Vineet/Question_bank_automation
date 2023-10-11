import {
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaGooglePay,
} from "react-icons/fa6";
import { ButtonToolbar, IconButton } from "rsuite";

const PaymentPartner = () => {
  return (
    <div className="payment-partner">
      <h3 className="mb">Our Payment Partner</h3>
      <ButtonToolbar spacing={20}>
        <IconButton
          title="Paypal"
          icon={<FaCcPaypal className="p-icon t-primary" />}
          appearance="default"
          size="sm"
        />
        <IconButton
          title="Google Pay"
          icon={<FaGooglePay className="p-icon t-primary" />}
          appearance="default"
          size="sm"
        />
        <IconButton
          title="Apple Pay"
          icon={<FaCcApplePay className="p-icon" />}
          appearance="default"
          size="sm"
        />
        <IconButton
          title="Master Card"
          icon={<FaCcMastercard className="p-icon t-warning"/>}
          appearance="default"
          size="sm"
        />
        <IconButton
          title="Visa"
          icon={<FaCcVisa className="p-icon t-dander" />}
          appearance="default"
          size="sm"
        />
        <IconButton
          title="Amazon Pay"
          icon={<FaCcAmazonPay className="p-icon t-warning" />}
          appearance="default"
          size="sm"
        />
      </ButtonToolbar>
    </div>
  );
};

export default PaymentPartner;
