// Define triangle types using constants
const Triangle = {
  SCALENE: "Scalene",
  ISOSCELES: "Isosceles",
  EQUILATERAL: "Equilateral",
  INVALID: "Invalid"
};

/**
 * Determines the type of triangle based on side lengths.
 * @param {number} s1 - The length of the first side.
 * @param {number} s2 - The length of the second side.
 * @param {number} s3 - The length of the third side.
 * @return {string} The type of the triangle.
 */
function triangle(s1, s2, s3) {
  // Reject non-positive sides
  if (s1 <= 0 || s2 <= 0 || s3 <= 0) {
    return Triangle.INVALID;
  }

  // Check triangle inequality
  if (s1 + s2 <= s3 || s2 + s3 <= s1 || s1 + s3 <= s2) {
    return Triangle.INVALID;
  }

  // Identify equilateral triangles
  if (s1 === s2 && s2 === s3) {
    return Triangle.EQUILATERAL;
  }

  // Identify isosceles triangles
  if (s1 === s3 || s2 === s3 || s1 === s3) {  // corrected from original fault
    return Triangle.ISOSCELES;
  }

  // If none of the above, it is scalene
  return Triangle.SCALENE;
}

