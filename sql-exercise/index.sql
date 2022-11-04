SELECT broker.NAME,COUNT(customer.ID) as customer_count FROM customer JOIN broker ON customer.BROKER_ID = broker.ID
GROUP BY broker.ID ORDER BY customer_count DESC, broker.NAME ASC