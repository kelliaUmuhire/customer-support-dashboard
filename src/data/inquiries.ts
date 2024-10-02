export const INQUIRIES = [
  {
    id: "#20462",
    customerName: "Alice Johnson",
    subject: "Order not received",
    date: "2024-09-12",
    status: "Open",
    details: {
      message:
        "I placed an order two weeks ago, but I haven’t received it yet. Can you please check the status?",
      responses: [
        {
          responseDate: "2024-09-13",
          message:
            "We are checking the order status and will get back to you shortly.",
        },
      ],
    },
  },
  {
    id: "#18933",
    customerName: "Bob Williams",
    subject: "Refund not processed",
    date: "2024-09-10",
    status: "Closed",
    details: {
      message:
        "I requested a refund a month ago, but it hasn’t been processed yet.",
      responses: [
        {
          responseDate: "2024-09-11",
          message:
            "Your refund has been processed and should appear in your account in 3-5 business days.",
        },
      ],
    },
  },
  {
    id: "#45169",
    customerName: "Charlie Davis",
    subject: "Account locked",
    date: "2024-09-14",
    status: "Pending",
    details: {
      message:
        "I am unable to access my account, it says my account is locked.",
      responses: [],
    },
  },
  {
    id: "#34304",
    customerName: "Dana Lee",
    subject: "Incorrect billing amount",
    date: "2024-09-15",
    status: "Open",
    details: {
      message:
        "I was billed the wrong amount for my last purchase. Please assist.",
      responses: [
        {
          responseDate: "2024-09-16",
          message:
            "We are investigating the billing discrepancy and will update you soon.",
        },
      ],
    },
  },
  {
    id: "#17188",
    customerName: "Eve Martinez",
    subject: "Change shipping address",
    date: "2024-09-13",
    status: "Closed",
    details: {
      message: "I need to change the shipping address for my recent order.",
      responses: [
        {
          responseDate: "2024-09-14",
          message: "Your shipping address has been updated as requested.",
        },
      ],
    },
  },
  {
    id: "#55677",
    customerName: "Fred Thompson",
    subject: "Delayed delivery",
    date: "2024-09-08",
    status: "Pending",
    details: {
      message: "My delivery is delayed and I need it urgently.",
      responses: [],
    },
  },
  {
    id: "#33144",
    customerName: "Grace Stewart",
    subject: "Payment failed",
    date: "2024-09-07",
    status: "Open",
    details: {
      message: "My payment failed when trying to check out. Can you help?",
      responses: [
        {
          responseDate: "2024-09-08",
          message:
            "We are investigating why the payment failed and will get back to you soon.",
        },
      ],
    },
  },
  {
    id: "#99665",
    customerName: "Hank Richards",
    subject: "Wrong item received",
    date: "2024-09-06",
    status: "Closed",
    details: {
      message: "I received the wrong item in my order.",
      responses: [
        {
          responseDate: "2024-09-07",
          message:
            "We apologize for the error. A replacement is being sent to you.",
        },
      ],
    },
  },
  {
    id: "#44122",
    customerName: "Isabella Miller",
    subject: "Account deactivated",
    date: "2024-09-05",
    status: "Open",
    details: {
      message: "My account was deactivated without any notice.",
      responses: [
        {
          responseDate: "2024-09-06",
          message:
            "We are looking into why your account was deactivated and will provide an update shortly.",
        },
      ],
    },
  },
  {
    id: "#88044",
    customerName: "Jake Clark",
    subject: "Unable to apply discount",
    date: "2024-09-04",
    status: "Pending",
    details: {
      message: "I tried to apply a discount code but it doesn’t work.",
      responses: [],
    },
  },
  {
    id: "#66333",
    customerName: "Karen Fox",
    subject: "Request to update email",
    date: "2024-09-03",
    status: "Closed",
    details: {
      message: "I need to update my email address on my account.",
      responses: [
        {
          responseDate: "2024-09-04",
          message: "Your email address has been successfully updated.",
        },
      ],
    },
  },
  {
    id: "#77155",
    customerName: "Liam King",
    subject: "Return request",
    date: "2024-09-02",
    status: "Closed",
    details: {
      message: "I want to return a product I recently purchased.",
      responses: [
        {
          responseDate: "2024-09-03",
          message:
            "Your return request has been approved. Please send the item back using the provided label.",
        },
      ],
    },
  },
  {
    id: "#92388",
    customerName: "Mia Collins",
    subject: "Product defect",
    date: "2024-09-01",
    status: "Open",
    details: {
      message: "The product I received is defective.",
      responses: [
        {
          responseDate: "2024-09-02",
          message:
            "We are investigating the issue and will provide a resolution soon.",
        },
      ],
    },
  },
  {
    id: "#11577",
    customerName: "Noah Lewis",
    subject: "Shipping delay",
    date: "2024-08-31",
    status: "Pending",
    details: {
      message:
        "My order is delayed and I need it delivered before my vacation.",
      responses: [],
    },
  },
  {
    id: "#55688",
    customerName: "Olivia Hall",
    subject: "Product exchange",
    date: "2024-08-30",
    status: "Open",
    details: {
      message:
        "I want to exchange the product I received for a different color.",
      responses: [
        {
          responseDate: "2024-08-31",
          message:
            "We have processed your exchange request and the new item will be shipped shortly.",
        },
      ],
    },
  },
  {
    id: "#99322",
    customerName: "Paul Young",
    subject: "Order cancellation",
    date: "2024-08-29",
    status: "Closed",
    details: {
      message: "I want to cancel my order before it ships.",
      responses: [
        {
          responseDate: "2024-08-30",
          message:
            "Your order has been successfully canceled and a refund will be issued.",
        },
      ],
    },
  },
  {
    id: "#45211",
    customerName: "Quinn Harris",
    subject: "Loyalty points missing",
    date: "2024-08-28",
    status: "Pending",
    details: {
      message: "My loyalty points for the last purchase haven't been credited.",
      responses: [],
    },
  },
  {
    id: "#88999",
    customerName: "Rachel Scott",
    subject: "Damaged item received",
    date: "2024-08-27",
    status: "Open",
    details: {
      message: "The item I received is damaged.",
      responses: [
        {
          responseDate: "2024-08-28",
          message: "We are sending a replacement for the damaged item.",
        },
      ],
    },
  },
];
