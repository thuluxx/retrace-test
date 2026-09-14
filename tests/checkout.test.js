// A deliberately flaky-looking failing test, for testing the Retrace GitHub Action.
// This simulates a hard-coded wait / timing bug: it "waits" 50ms then checks
// a value that a real async operation wouldn't have finished updating yet.

function getCartTotalAfterCoupon() {
  // Simulates an async operation that hasn't resolved by the time we check it.
  return 1400.00; // should be 1260.00 after the coupon applies
}

test('applies coupon at checkout', () => {
  const expected = 1260.00;
  const received = getCartTotalAfterCoupon();
  expect(received).toBe(expected);
});
