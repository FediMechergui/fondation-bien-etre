// EmailJS Debug Helper
// Add this temporarily to your Contact.tsx for testing

const testEmailJS = async () => {
  try {
    const testParams = {
      from_name: "Test User",
      from_email: "test@example.com", 
      phone: "123-456-7890",
      subject: "Test Message",
      message: "This is a test message to verify EmailJS is working",
      to_name: "Fondation Bien Être",
      reply_to: "test@example.com",
      date: new Date().toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    console.log('Sending test email with params:', testParams);
    
    const result = await emailjs.send(
      'service_ftofu2s', // Your service ID
      'template_ywo98le', // Your template ID  
      testParams,
      'iTTrlyXAyQQeidyge' // Your public key
    );
    
    console.log('EmailJS Result:', result);
    
    if (result.status === 200) {
      alert('Test email sent successfully! Check fondationbienetredemo@gmail.com inbox and spam folder.');
    }
    
  } catch (error) {
    console.error('EmailJS Test Error:', error);
    alert('Test failed: ' + error.message);
  }
};

// Call this function from browser console: testEmailJS()
window.testEmailJS = testEmailJS;