export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "¥0",
      period: "Forever free",
      description: "Perfect for personal use",
      features: [
        "Up to 50 tasks",
        "Basic task management",
        "Mobile sync",
        "7-day data retention",
        "Email support"
      ],
      buttonText: "Start Free",
      buttonStyle: "border-2 border-gray-300 text-gray-700 hover:border-gray-400",
      popular: false
    },
    {
      name: "Pro",
      price: "¥29",
      period: "/month",
      description: "For individuals and small teams",
      features: [
        "Unlimited tasks",
        "Advanced task management",
        "Cross-platform sync",
        "Unlimited data storage",
        "Team collaboration (up to 5 members)",
        "Priority email support",
        "Data export feature"
      ],
      buttonText: "Choose Pro",
      buttonStyle: "bg-blue-600 text-white hover:bg-blue-700",
      popular: true
    },
    {
      name: "Enterprise",
      price: "¥99",
      period: "/month",
      description: "For large teams and enterprises",
      features: [
        "All Pro features",
        "Unlimited team members",
        "Advanced analytics reports",
        "API access",
        "Custom branding",
        "SSO single sign-on",
        "Dedicated account manager",
        "24/7 phone support"
      ],
      buttonText: "Contact Sales",
      buttonStyle: "border-2 border-gray-300 text-gray-700 hover:border-gray-400",
      popular: false
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose the Right Plan for You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with our free plan and upgrade to Pro or Enterprise as your needs grow. All plans include a 30-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-4">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-gray-50 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-600 mb-4">
            We provide customized task management solutions for large enterprises, including private deployment and professional services.
          </p>
          <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Contact us to learn more →
          </button>
        </div>
      </div>
    </section>
  )
}