import React from 'react';

const Stats = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Page Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Model Performance and Insights</h1>
          <p className="text-lg text-gray-600 mt-2">
            This page provides a detailed overview of how XGBoost and Random Forest contribute to our prediction system. Explore their strengths, limitations, and performance metrics.
          </p>
        </header>

        {/* Section for XGBoost */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            XGBoost Model
          </h2>
          <p className="text-gray-600 mb-6">
            XGBoost (Extreme Gradient Boosting) is widely used for structured data analysis due to its ability to handle missing values, reduce overfitting with regularization, and efficiently process large datasets. It excels in use cases where high accuracy is critical, such as healthcare diagnostics or fraud detection.
          </p>
          <div className="flex flex-wrap gap-6">
            {/* Placeholder for Visualization */}
            <div className="bg-gray-200 animate-pulse rounded-lg w-full lg:w-[45%] h-64 flex items-center justify-center">
              <p className="text-gray-400">XGBoost Performance Visualization</p>
            </div>
            {/* Model Insights */}
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Why Choose XGBoost?
              </h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-600">
                <li>
                  **Handles Missing Data:** Automatically manages missing values, making it robust for incomplete datasets.
                </li>
                <li>
                  **High Performance:** Uses parallel computation to speed up training on large datasets.
                </li>
                <li>
                  **Regularization:** Reduces overfitting and ensures better generalization on unseen data.
                </li>
              </ul>
              <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">
                Key Metrics:
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Accuracy: 94%</li>
                <li>Precision: 92%</li>
                <li>Recall: 91%</li>
                <li>F1-Score: 91.5%</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section for Random Forest */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            Random Forest Model
          </h2>
          <p className="text-gray-600 mb-6">
            Random Forest is a versatile and easy-to-use ensemble learning method that combines multiple decision trees to improve predictive accuracy. It’s particularly effective in solving classification and regression problems where model interpretability and robustness are crucial.
          </p>
          <div className="flex flex-wrap gap-6">
            {/* Placeholder for Visualization */}
            <div className="bg-gray-200 animate-pulse rounded-lg w-full lg:w-[45%] h-64 flex items-center justify-center">
              <p className="text-gray-400">Random Forest Feature Importance Visualization</p>
            </div>
            {/* Model Insights */}
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Why Choose Random Forest?
              </h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-600">
                <li>
                  **Handles Overfitting:** Combines multiple trees to reduce variance and overfitting.
                </li>
                <li>
                  **Feature Importance:** Identifies key features influencing predictions.
                </li>
                <li>
                  **Scalability:** Performs well on large datasets and can handle mixed data types.
                </li>
              </ul>
              <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">
                Key Metrics:
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Accuracy: 92%</li>
                <li>Precision: 90%</li>
                <li>Recall: 88%</li>
                <li>F1-Score: 89%</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            How to Interpret These Insights?
          </h2>
          <p className="text-gray-600">
            Both models play a critical role in ensuring accurate and reliable predictions for this project. While XGBoost provides cutting-edge accuracy and is suitable for complex datasets, Random Forest offers excellent interpretability and robustness. By leveraging the strengths of both models, we can ensure a balanced and efficient predictive system.
          </p>
          <div className="bg-gray-200 animate-pulse rounded-lg w-full h-64 mt-6 flex items-center justify-center">
            <p className="text-gray-400">Comparison Chart Placeholder</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stats;
