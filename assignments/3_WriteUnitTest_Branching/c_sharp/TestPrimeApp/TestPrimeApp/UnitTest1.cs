using PrimeApp;

namespace TestPrimeApp;

public class Tests
{
    [SetUp]
    public void Setup()
    {
    }

    [TestFixture]
    public class PrimeUtilitiesTests
    {
        [TestCase(0, false)]
        [TestCase(1, false)]
        [TestCase(2, true)]
        [TestCase(3, true)]
        [TestCase(4, false)]
        [TestCase(5, true)]
        [TestCase(10, false)]
        [TestCase(13, true)]
        [TestCase(-10, true)]
        public void IsPrime_ShouldReturnExpectedResult(int number, bool expected)
        {
            // Act
            var result = PrimeUtilities.IsPrime(number);

            // Assert
            Assert.That(result, Is.EqualTo(expected));
        }
    }
}