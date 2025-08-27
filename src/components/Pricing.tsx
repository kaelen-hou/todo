export default function Pricing() {
  const plans = [
    {
      name: "免费版",
      price: "¥0",
      period: "永久免费",
      description: "个人用户的完美选择",
      features: [
        "最多 50 个任务",
        "基础任务管理",
        "手机端同步",
        "7天数据保留",
        "邮件支持"
      ],
      buttonText: "免费开始",
      buttonStyle: "border-2 border-gray-300 text-gray-700 hover:border-gray-400",
      popular: false
    },
    {
      name: "专业版",
      price: "¥29",
      period: "/月",
      description: "适合个人和小团队",
      features: [
        "无限任务数量",
        "高级任务管理",
        "全平台同步",
        "无限数据存储",
        "团队协作（5人内）",
        "优先邮件支持",
        "数据导出功能"
      ],
      buttonText: "选择专业版",
      buttonStyle: "bg-blue-600 text-white hover:bg-blue-700",
      popular: true
    },
    {
      name: "企业版",
      price: "¥99",
      period: "/月",
      description: "大型团队和企业",
      features: [
        "专业版所有功能",
        "无限团队成员",
        "高级分析报告",
        "API 访问权限",
        "自定义品牌",
        "SSO 单点登录",
        "专属客户经理",
        "24/7 电话支持"
      ],
      buttonText: "联系销售",
      buttonStyle: "border-2 border-gray-300 text-gray-700 hover:border-gray-400",
      popular: false
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            选择适合您的计划
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            从免费版开始，随着需求增长升级到专业版或企业版。所有计划都包含 30 天免费试用。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-4">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    最受欢迎
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
            需要定制化解决方案？
          </h3>
          <p className="text-gray-600 mb-4">
            我们为大型企业提供定制化的任务管理解决方案，包括私有部署和专业服务。
          </p>
          <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            联系我们了解更多 →
          </button>
        </div>
      </div>
    </section>
  )
}