/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    // Base case: A single character can be printed in 1 turn
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    // Fill the DP table
    for (let length = 2; length <= n; length++) {
        for (let i = 0; i <= n - length; i++) {
            let j = i + length - 1;
            dp[i][j] = dp[i][j - 1] + 1;  // worst case: print s[j] separately
            for (let k = i; k < j; k++) {
                if (s[k] == s[j]) {
                    dp[i][j] = Math.min(dp[i][j], dp[i][k] + (dp[k + 1][j - 1] || 0));
                }
            }
        }
    }

    return dp[0][n - 1];
};