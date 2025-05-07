const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jameelahamed669@gmail.com", // Make sure .env has USER=youremail@gmail.com
    pass: "ulzv jean aeck kzhe", // and PASS=yourpassword or app password
  },
  secure: false,
});

const product = {
    name: 'Wireless Bluetooth Headphones',
    price: '$49.99',
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'High-quality noise-cancelling headphones',
    paymentLink: 'https://example.com/pay-now' // Dummy payment page
  };

  const htmlContent = `
    <h2>Thanks for your order!</h2>
    <p>Here are your product details:</p>
    <img src="${product.image}" alt="${product.name}" style="width:150px; height:150px;" />
    <p><strong>Product:</strong> ${product.name}</p>
    <p><strong>Description:</strong> ${product.description}</p>
    <p><strong>Price:</strong> ${product.price}</p>
    <br/>
    <a href="${product.paymentLink}" 
       style="display:inline-block;padding:10px 20px;background-color:#28a745;color:white;text-decoration:none;border-radius:5px;">
       Pay Now
    </a>
  `;

const sendEmail = async () => {
  try {
    const info = await transporter.sendMail({
      from: '"jameel" <jameelahamed669@gmail.com>', // Sender address
      to: "jameelahamed559@gmail.com", // List of recipients
      subject: "Acknowledgement", // Subject line
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis odit eius eligendi. Possimus nam adipisci exercitationem minus aspernatur, sed culpa quis atque corporis, labore dolorum est recusandae quod libero, molestiae voluptatibus ipsam corrupti voluptas reprehenderit error? Deleniti labore magni nihil voluptatem qui odit soluta voluptatibus incidunt vero, sit quia animi quisquam dolor maiores a illo minima est suscipit. Aperiam ut temporibus iste obcaecati doloremque labore vero eos ipsum maiores provident distinctio dolorum, natus ipsa beatae error exercitationem nihil autem? Quae pariatur eligendi debitis mollitia architecto? Autem, eveniet! Maxime sint repellat reprehenderit, odio unde omnis dolorum voluptatum eveniet sequi ipsum quo culpa quibusdam libero qui, recusandae nam. Unde odio corporis voluptatibus? Laudantium dicta iure, aspernatur voluptas cupiditate laborum accusamus eveniet id fugiat recusandae.", // Plain text body
      html: htmlContent, // HTML body
      attachments: [
        {
          filename: "image.png",
          path: "./images/image.png",
          cid: "unique@image.cid", // Same as in the HTML img src
        },
      ],
    });

    console.log("Message sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};

sendEmail();
