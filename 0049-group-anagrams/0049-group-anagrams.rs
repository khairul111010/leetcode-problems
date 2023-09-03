use std::collections::HashMap;
impl Solution {
    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
    
        let mut anagram_groups: HashMap<String, Vec<String>> = HashMap::new();

        // Helper function to sort a word and use it as a key
        fn sort_word(word: &str) -> String {
            let mut chars: Vec<char> = word.chars().collect();
            chars.sort();
            chars.iter().collect()
        }

        for word in strs.iter() {
            let sorted_word = sort_word(word);

            // Use the sorted word as a key for grouping
            anagram_groups.entry(sorted_word).or_insert(Vec::new()).push(word.clone());
        }

        // Convert the values (groups of anagrams) from the HashMap into a Vec
        anagram_groups.into_iter().map(|(_, group)| group).collect()   

    }
}