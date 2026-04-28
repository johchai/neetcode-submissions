class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map();

        // check the length
        if (s.length !== t.length) return false;

        // check s
        for (const char of s) {
            // char, count – create the entry regardless, AND if no value, assign to 0 AND plus 1 regardless.
            map.set(char, (map.get(char) ?? 0) + 1);
        }

        // check t
        for (const char of t) {
            // now cross check, if it's 0 count, then its game over!
            if (!map.get(char)) return false;

            // if OK then decrement by one
            // map.set(char, (map.get(char) - 1));
            map.set(char, map.get(char) - 1);

            // if its 0, remove the entry
            if (!map.get(char)) map.delete(char);
        }

        // final check
        if (!map.size) {
            return true;
        } else {
            return false;
        }
    }
}
